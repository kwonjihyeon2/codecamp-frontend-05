import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;

interface IboardInput {
  password?: string;
  title?: string;
  writer?: string;
  contents?: string;
}

export default function ImagePage() {
  const [files, setFiles] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
        setFiles(files);
      }
    };
  };

  const onClickUpload = async (data: IboardInput) => {
    console.log(data);
    await uploadFile({
      variables: {
        file: files,
      },
    });

    const loadResult = await createBoard({
      variables: {
        createBoardInput: {
          ...data,
          images: imageUrl,
        },
      },
    });

    console.log(loadResult.data?.createBoard._id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onClickUpload)}>
        작성자 : <input type="text" {...register("writer")} />
        <br />
        비밀번호 : <input type="text" {...register("password")} />
        <br />
        제목 : <input type="text" {...register("title")} />
        <br />
        내용 : <input type="text" {...register("contents")} />
        <br />
        <input type="file" onChange={onChangeFile} />
        <img src={imageUrl} />
        <button>저장하기</button>
      </form>
    </div>
  );
}
