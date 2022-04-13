import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IComment {
  contents: string;
}

export interface ICommentUI {
  data: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  handleSubmit: UseFormHandleSubmit<FieldValues> | any;
  register: UseFormRegister<FieldValues>;
  onClickSubmit: (data: IComment) => Promise<void>;
  onClickOpen: (el: string) => () => void;
  onClickDelete: (useditemQuestionId: string) => () => Promise<void>;
  isOpenComment: string;
}
