import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
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

interface IEditProfile {
  picture: string;
  onChangefile: (file: string) => void;
}

const ImageBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  position: relative;
  span {
    width: 15%;
    margin-right: 10px;
  }
`;

export const Picture = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerProfile = styled.img`
  width: 100%;
`;

export const InnerTxt = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
`;

export const HideInput = styled.input`
  display: none;
`;

export default function UploadProfile(props: IEditProfile) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadfile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickload = () => {
    fileRef.current?.click();
  };

  const onClickfile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    try {
      const result = await uploadfile({
        variables: { file },
      });
      console.log(result);
      props.onChangefile(result.data?.uploadFile.url || "");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {props.picture && props.picture !== "null" ? (
        <ImageBox>
          <span>프로필 이미지</span>
          <div
            style={{ width: "150px", height: "150px" }}
            onClick={onClickload}
          >
            <InnerProfile
              src={`https://storage.googleapis.com/${props.picture}`}
              alt={`${props.picture}`}
            />
          </div>
        </ImageBox>
      ) : (
        <ImageBox>
          <span>프로필 이미지</span>
          <Picture onClick={onClickload}>
            <InnerTxt>
              프로필 사진을
              <br /> 추가해주세요
            </InnerTxt>
          </Picture>
        </ImageBox>
      )}
      <HideInput type="file" ref={fileRef} onChange={onClickfile} />
    </>
  );
}
