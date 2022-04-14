import {
  IQuery,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";

export interface IPropsAnswer {
  isOpenComment: string;
  el: IUseditemQuestionAnswer;
  data: Pick<IQuery, "fetchUseditemQuestionAnswers">;
  onClickDeleteAnswer: (
    useditemQuestionAnswerId: string
  ) => () => Promise<void>;
}
