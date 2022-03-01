import { Modal } from "antd";
import { ChangeEvent } from "react";

export const getMyDate = (myDate: any) => {
  const GetNewDate = new Date(myDate);

  const yyyy = GetNewDate.getFullYear();
  const mm = String(GetNewDate.getMonth() + 1).padStart(2, "0");
  const dd = String(GetNewDate.getDate()).padStart(2, "0");

  return `${yyyy}.${mm}.${dd}`;
};

export const checkFileValidation = (clickfile: File | undefined) => {
  if (!clickfile?.size) return false;

  if (clickfile?.size > 5 * 1024 * 1024) {
    Modal.error({
      title: "파일 등록 실패",
      content: "파일 크기는 5MB 이하여야합니다.",
    });
    return false;
  }

  if (
    !clickfile?.type.includes("jpeg") &&
    !clickfile?.type.includes("png") &&
    !clickfile?.type.includes("gif")
  ) {
    Modal.error({
      title: "파일 등록 실패",
      content: "파일은 gif, jpeg, png 형식만 가능합니다.",
    });
    return false;
  }
  return true;
};

export const handelError = (event: ChangeEvent<HTMLImageElement>) => {
  event.target.src = "/basic.jpeg";
};
