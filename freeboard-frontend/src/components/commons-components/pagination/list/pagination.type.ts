import { MouseEvent } from "react";

export interface IProsPage {
  refetch: any;
  LastPage: number;
}

export interface IPropsPGUI {
  onClickMovePage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  startPage: any;
  LastPage: Number;
  matchPage: Number;
}
