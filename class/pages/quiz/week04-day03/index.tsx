import { useRef, useState, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import { LikeOutlined } from "@ant-design/icons";
import {
  IMutation,
  IMutationUploadFileArgs,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const LOAD_IMAGE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const UPLOAD_CONTENT = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function LoadImagePage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [UploadMyImage] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(LOAD_IMAGE);
  const [UploadMyContent] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(UPLOAD_CONTENT);
  const [ChangeImg, setChangeImg] = useState("");
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContent] = useState("");

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const result = await UploadMyImage({ variables: { file } });
    setChangeImg(result.data?.uploadFile.url || "");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    console.log(writer);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const createInfo = async () => {
    try {
      const uploadresult = await UploadMyContent({
        variables: {
          createBoardInput: {
            writer,
            title,
            password,
            contents,
            images: [`https://storage.googleapis.com/${ChangeImg}`],
          },
        },
      });
      console.log(uploadresult);
    } catch (error) {
      console.log(error.message);
    }
  };

  const divimgUpload = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <div>
        작성자 : <input type="text" onChange={onChangeWriter} />
      </div>
      <div>
        비밀번호 : <input type="password" onChange={onChangePassword} />
      </div>
      <div>
        제목 : <input type="text" onChange={onChangeTitle} />
      </div>
      <div>
        내용 : <input type="text" onChange={onChangeContent} />
      </div>

      <div onClick={divimgUpload}>
        <LikeOutlined style={{ fontSize: 32 }} />
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        style={{ display: "none" }}
      />
      <img src={`https://storage.googleapis.com/${ChangeImg}`} alt="" />

      <div>
        <button onClick={createInfo}>등록하기</button>
      </div>
    </div>
  );
}
