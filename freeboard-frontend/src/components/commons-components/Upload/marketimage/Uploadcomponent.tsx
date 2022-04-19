import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import styled from "@emotion/styled";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const FileBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #bdbdbd;
`;

const FileImg = styled.img`
  width: 50px;
  height: 50px;
`;

interface IPropsUpload {
  key: string;
  index: number;
  fileUrl?: string;
  onChangefile: (file: string, index: number) => void;
}

export default function MarketUploadfile(props: IPropsUpload) {
  const [uploadfile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickfile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;
    try {
      const result = await uploadfile({
        variables: { file },
      });
      props.onChangefile(result.data?.uploadFile.url, props.index);
      console.log(result.data?.uploadFile);
    } catch (error) {
      Modal.error({
        title: "업로드 실패",
        content: String(error.message),
      });
      console.log(error.message);
    }
  };

  const fileRef = useRef<HTMLInputElement>(null);
  const onClickRef = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      {props.fileUrl ? (
        <FileBox onClick={onClickRef}>
          <FileImg src={`https://storage.googleapis.com/${props.fileUrl}`} />
        </FileBox>
      ) : (
        <FileBox onClick={onClickRef}>
          +<br />
          Upload
        </FileBox>
      )}
      <input type="file" ref={fileRef} onChange={onClickfile} />
    </div>
  );
}
