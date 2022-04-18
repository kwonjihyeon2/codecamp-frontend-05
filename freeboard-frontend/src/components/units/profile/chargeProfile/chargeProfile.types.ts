import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsCharge {
  onClickPayment: () => void;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  changeMount: number;
  onClickAmount: (number: number) => () => void;
  amount: number;
  isShow: boolean;
}

export interface IMountColor {
  changeMount: number;
  amount?: number;
}
