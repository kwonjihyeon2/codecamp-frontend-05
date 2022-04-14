import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { getMyDate } from "../../../../commons/libraries/uitils";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import ProductClickButton from "../../../commons-components/button/market04";
import CommentInput from "../../../commons-components/input/marketComment";
import {
  FETCH_COMMENT_ANSWER,
  UPDATE_COMMENT_ANSWER,
} from "./EditCommentAnswer.queries";
import * as EA from "./EditCommentAnswer.style";
import { IPropsAnswer } from "./EditCommentAnswer.types";

export default function EditCommentAnswerItem(props: IPropsAnswer) {
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
              useditemQuestionId: String(props.isOpenComment),
            },
            query: FETCH_COMMENT_ANSWER,
          },
        ],
      });
      console.log(props.isOpenComment);
      setIsEdit((prev) => !prev);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <EA.Wrapper>
      {isEdit ? (
        <div>
          <EA.WrapperEdit>
            <EA.ProfileIcon />
            <EA.ProfileInfo>{props.el.user.name}</EA.ProfileInfo>
          </EA.WrapperEdit>
          <form onSubmit={handleSubmit(onClickEdit(props.el._id))}>
            <CommentInput
              type="text"
              register={register("contents")}
              defaultValue={props.el.contents}
            />
            <ProductClickButton name="수정하기" />
          </form>
        </div>
      ) : (
        <EA.WrapperEdit style={{ justifyContent: "space-between" }}>
          <div>
            <EA.WrapperEdit>
              <EA.ProfileIcon />
              <EA.ProfileInfo>{props.el.user.name}</EA.ProfileInfo>
            </EA.WrapperEdit>
            <EA.CommentTxt>{props.el.contents}</EA.CommentTxt>
          </div>

          <div>
            <EA.CommentButton onClick={onChangeEdit}>
              <BiEditAlt />
            </EA.CommentButton>
            <EA.CommentButton onClick={props.onClickDeleteAnswer(props.el._id)}>
              <AiFillDelete />
            </EA.CommentButton>
          </div>
        </EA.WrapperEdit>
      )}
    </EA.Wrapper>
  );
}
