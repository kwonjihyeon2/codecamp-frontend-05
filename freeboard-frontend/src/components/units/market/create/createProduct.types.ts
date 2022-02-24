import { ChangeEvent } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IpropsCreateItem {
  name: string;
  remarks: string;
  price: number;
  contents: string;
  //   images: [string];
}

export interface IPropsType {
  isEdit: boolean;
  fetchItem?: Pick<IQuery, "fetchUseditem">;
}

export interface IpropsCreateUI {
  register: any;
  onClickSubmit: (data) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onChangefile: (file: string, index: number) => void;
  uploadfile: string[];
  onClickEdit: (data) => void;
  isEdit: boolean;
  fetchItem?: Pick<IQuery, "fetchUseditem">;
  onChangeContents: (value) => void;
  onToggleModal: () => void;
  isModal: boolean;
  onPostcode: (data) => void;
  ChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  zonecode?: string;
  Address?: string;
}

export interface IMyVariableUpdateItem {
  name: string;
  remarks: string;
  price: number;
  contents: string;
  images: string[];
}
