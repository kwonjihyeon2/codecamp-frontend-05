import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsType {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface IUserTodayView {
  name?: string;
  email?: string;
  _id: string;
  images?: [string];
  remarks?: string;
  price?: number;
}

export interface IStateToday {
  todayView?: IUserTodayView[];
  setTodayView?: Dispatch<SetStateAction<IUserTodayView[]>>;
}

export interface IPropsDetailType {
  onClickPicked: (el: string | undefined) => () => Promise<void>;
  picked: boolean;
  PickedData: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickDeleteItem: () => void;
  onClickBuyItem: () => Promise<void>;
  todayView: IUserTodayView[];
  onClickMoveItem: (_id: string) => () => void;
}

export interface IpropsButton {
  isOpen: boolean;
}
