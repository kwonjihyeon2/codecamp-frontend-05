import { useMutation, gql } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [image, setImage] = useState(""); //setImage에서 빈 값일수도있음 그래서 <string | undefined> 타입을 지정해주거나

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    //files : 동시에 여러파일 선택할 수 있기때문, 여러개 선택시 multiple(속성)
    // 파일이 없을 수도 있으니 옵셔널체이닝?. 사용(file이 null이면 [0]을 선택할 수 없기때문에)
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } }); //shorthandproperty
      console.log(result.data?.uploadFile.url);

      setImage(result.data?.uploadFile.url || "");
      //값이 없으면 빈문자열을 보내거나 -> 이 방법이 더 좋을듯 타입지정되면 추후에도 번거로울 수 있을듯
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${image}`} alt={`${image}`} />
    </div>
  );
}
