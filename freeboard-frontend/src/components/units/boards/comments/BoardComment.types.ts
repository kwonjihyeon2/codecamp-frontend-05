import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentProps {
  isEdit: boolean;
  data?: any;
}

export interface IActive {
  isActive: boolean;
}

export interface IPropsComment {
  data: Pick<IQuery, "fetchBoardComments"> | undefined;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isActive: boolean;
  CreateComment: () => void;
  length: Number;
  handleChange: (value: number) => void;
  StarValue: number;
}

export interface IPropsCommentList {
  el?: any;
  data?: any;
  DeleteCommentBtn?: any;
  UpdateComment?: any;
  isEdit?: boolean;
}

export interface IPropsCommentEdit {
  el?: any;
  data?: any;
  UpdateComment?: any;
  isEdit?: boolean;
  EditId?: any;
}
