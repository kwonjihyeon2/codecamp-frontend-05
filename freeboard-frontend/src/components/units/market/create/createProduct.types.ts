import { ChangeEvent } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
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
  register: UseFormRegister<FieldValues> | any;
  onClickSubmit: (data: IpropsCreateItem) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues> | any;
  onChangefile: (file: string, index: number) => void;
  uploadfile: string[];
  onClickEdit: (data: IpropsCreateItem) => Promise<void>;
  isEdit: boolean;
  fetchItem: Pick<IQuery, "fetchUseditem"> | undefined;
  onChangeContents: (value: string) => void;
  onToggleModal: () => void;
  isModal: boolean;
  onPostcode: (data: any) => void;
  zonecode: any;
  Address: any;
  onChangeTag: (event) => void;
  onDeleteTag: (number: number) => () => void;
  tag: string[];
}

export interface IMyVariableUpdateItem {
  name?: string;
  remarks?: string;
  price?: number;
  contents?: string;
  images?: string[];
}
