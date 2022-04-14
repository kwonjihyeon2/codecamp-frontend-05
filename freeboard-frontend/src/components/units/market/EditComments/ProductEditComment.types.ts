import {
  IQuery,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";

export interface IPropsEditComment {
  el: IUseditemQuestion;
  data: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  onClickDelete: (useditemQuestionId: string) => () => Promise<void>;
}
