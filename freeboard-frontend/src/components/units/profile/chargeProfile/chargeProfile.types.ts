import { ChangeEvent, RefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsCharge {
  onClickPayment: () => void;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickAmount: (number: number) => () => void;
  amount: number;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: () => void;
  onChangefile: (file: string) => void;
  picture: string;
}

export interface IMountColor {
  changeMount: number;
  amount?: number;
}
