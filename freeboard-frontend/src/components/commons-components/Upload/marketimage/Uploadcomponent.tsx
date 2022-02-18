import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";
import styled from "@emotion/styled";

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

export default function MarketUploadfile(props) {
  const [uploadfile] = useMutation(UPLOAD_FILE);

  const onClickfile = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;
    try {
      const result = await uploadfile({
        variables: { file },
      });
      props.onChangefile(result.data?.uploadFile.url, props.index);
      console.log(result.data?.uploadFile);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fileRef = useRef(null);
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
