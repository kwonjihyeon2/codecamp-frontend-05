import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_COMMENT_ANSWER,
  UPDATE_COMMENT_ANSWER,
} from "./EditCommentAnswer.queries";

export default function EditCommentAnswerItem(props) {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [updateCommentAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_COMMENT_ANSWER);

  const [isEdit, setIsEdit] = useState(false);

  const onChangeEdit = () => {
    setIsEdit(true);
  };

  const onClickEdit = (useditemQuestionAnswerId: string) => async (data) => {
    try {
      const result = await updateCommentAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionAnswerId: useditemQuestionAnswerId,
        },
        refetchQueries: [
          {
            variables: {
              page: 1,
              useditemQuestionId: String(props.QuestionId),
            },
            query: FETCH_COMMENT_ANSWER,
          },
        ],
      });
      console.log(props.QuestionId);
      setIsEdit((prev) => !prev);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {isEdit ? (
        <div>
          <form onSubmit={handleSubmit(onClickEdit(props.el._id))}>
            <input
              type="text"
              {...register("contents")}
              defaultValue={props.el.contents}
            />

            <button>등록</button>
          </form>
        </div>
      ) : (
        <div>
          {props.el.contents}
          <span onClick={onChangeEdit}>수정</span>
          <span onClick={props.onClickDeleteAnswer(props.el._id)}>삭제</span>
        </div>
      )}
    </div>
  );
}
