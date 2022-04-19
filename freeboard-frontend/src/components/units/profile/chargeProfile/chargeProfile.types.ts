import { ChangeEvent, RefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsCharge {
  onClickPayment: () => void;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickAmount: (number: number) => () => void;
  amount: number;
  fileRef: RefObject<HTMLInputElement>;
  onClickRef: () => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: () => void;
}

export interface IMountColor {
  changeMount: number;
  amount?: number;
}
