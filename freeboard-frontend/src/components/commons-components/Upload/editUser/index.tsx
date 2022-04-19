import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import styled from "@emotion/styled";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function UploadProfile() {
  const [uploadfile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickfile = async () => {
    try {
      const result = await uploadfile({});
    } catch (error) {
      console.log(error.message);
    }
  };

  return <div></div>;
}
