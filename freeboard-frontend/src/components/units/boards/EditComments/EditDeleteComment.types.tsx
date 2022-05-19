import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsEdit {
  data: Pick<IQuery, "fetchBoardComments"> | undefined;
  isModalVisible: boolean;
  DeleteCommentBtn: () => void;
  ToggleSetting: () => void;
  ModalPasswordEvent: (event: ChangeEvent<HTMLInputElement>) => void;
  ToggleOpen: any;
  LoadComment: () => void;
  fetchMore: any;
}

export interface IPropsEditItem {
  data: any;
  el: any;
  ToggleOpen: () => void;
  isModalVisible: boolean;
}

export interface IMyVariableUpdateComment {
  contents?: string;
  rating?: number;
}
