import { useMutation, gql } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkFileValidation } from "../../src/commons/libraries/utils";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const [image, setImage] = useState(""); //<string | undefined> 타입을 지정해주거나
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; //동시에 여러파일 / multiple : 속성 /파일이 없을 수도 있으니 옵셔널체이닝?.
    console.log(file);

    const isVaild = checkFileValidation(file);
    if (!isVaild) return;

    try {
      const result = await uploadFile({ variables: { file } }); //shorthandproperty
      console.log(result.data?.uploadFile.url);

      setImage(result.data?.uploadFile.url || ""); //값이 없으면 빈문자열을 보내거나
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${image}`} alt="" />
    </div>
  );
}
