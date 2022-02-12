import * as S from "../../../units/boards/writer/BoardWrite.styles";
// import { Modal } from "antd";
import { useRef, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { checkFileValidation } from "../../../../commons/libraries/uitils";

export const UPLOAD_FILES = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export interface IPropsWriteUI {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  ClickImage: () => void;
  filesRef: any;
  index: any;
  el: any;
  onChangeUrls: any;
}

export default function Uploadfile(props: IPropsWriteUI) {
  const filesRef = useRef<HTMLInputElement>(null);
  const [uploadfile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILES);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const clickfile = event.target.files?.[0];
    console.log(clickfile); // 파일 올라간 시간 등 storage 주소

    try {
      const result = await uploadfile({ variables: { file: clickfile } });
      props.onChangeUrls(result?.data?.uploadFile.url, props.index); // 파일 주소로 연결하면 인터넷으로 볼 수 있음
    } catch (error) {
      Modal.error({
        title: "업로드 실패",
        content: `${error.message}`,
      });
    }
  };

  const ClickImage = () => {
    filesRef.current?.click();
  };

  return (
    <div>
      <S.LoadImg>
        {props.fileUrl ? (
          <S.GetImg onClick={ClickImage}>
            {/* <img src={`https://storage.googleapis.com/${props.fileUrl}`} /> */}
          </S.GetImg>
        ) : (
          <div>
            <S.GetImg onClick={ClickImage}>
              +<br />
              Upload
            </S.GetImg>
          </div>
        )}

        <S.nonInput
          type="file"
          onChange={onChangeFile}
          multiple
          ref={filesRef}
        />
      </S.LoadImg>
    </div>
  );
}
