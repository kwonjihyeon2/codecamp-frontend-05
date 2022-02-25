import { useState, ChangeEvent } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
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

export default function ImageUploadSubmitPage() {
  const [file1, setFile1] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result); //미리보기 주소 넣는 것
        setFile1(file); //uploadFile()을 위한 URL 주소에 대한 변수
      }
    };
  };

  const onClickSubmit = async () => {
    // 1. uploadFile()로 image업로드하기(ImageUrl state로 미리 본 주소는 내 컴퓨터에서 주소 미리본 것)
    // 여러개의 파일을 업로드하기위해서 uploadFile 요청을 업로드 횟수만큼 해줘야함 -> await 여러번 보내야함 -> promise all로 성능 향상
    const result = await uploadFile({
      variables: {
        file: file1,
      },
    });
    const imageUrl = result.data?.uploadFile.url || "";

    // 2. createBoard로 게시물 등록하기
    // writer, title, contents 기입 + imageUrl 전송
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목",
          contents: "이미지업로드 연습",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <div>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
