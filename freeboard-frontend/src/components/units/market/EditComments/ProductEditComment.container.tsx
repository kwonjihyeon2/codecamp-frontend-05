import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { UPDATE_COMMENT } from "./productEditComment.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as QA from "./ProductEditComment.styles";
import { getMyDate } from "../../../../commons/libraries/uitils";
import { FaUserCircle } from "react-icons/fa";
import { IPropsEditComment } from "./ProductEditComment.types";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import CommentMyInput from "../../../commons-components/input/marketComment";
import ProductClickButton from "../../../commons-components/button/market04";

export default function ProductCommentItem(props: IPropsEditComment) {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [updateComment] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_COMMENT);
  const [isEdit, setIsEdit] = useState(false);

  const onChangeEdit = (useditemQuestionId: string) => () => {
    console.log(useditemQuestionId);
    setIsEdit((prev) => !prev);
  };

  const onClickUpdate = (useditemQuestionId: string) => async (data) => {
    console.log(data);
    try {
      const result = await updateComment({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: useditemQuestionId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.updateUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      console.log(result);
      setIsEdit((prev) => !prev);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <QA.Wrapper>
        <QA.WrapperLeft>
          <QA.ProfileIcon />
          <QA.CommentUser>
            <div style={{ display: "flex" }}>
              <QA.CommentInfo>
                {props.el.user.name}
                <QA.CmData>{getMyDate(props.el.createdAt)}</QA.CmData>
              </QA.CommentInfo>
            </div>
            {isEdit ? (
              <div>
                <form onSubmit={handleSubmit(onClickUpdate(props.el._id))}>
                  <CommentMyInput
                    type="text"
                    register={register("contents")}
                    defaultValue={props.el.contents}
                  />
                  <ProductClickButton name="수정하기" />
                </form>
              </div>
            ) : (
              <QA.CommentTxt>{props.el.contents}</QA.CommentTxt>
            )}
          </QA.CommentUser>
        </QA.WrapperLeft>
        <QA.WrapperRight style={{ display: "flex" }}>
          <QA.CommentButton onClick={onChangeEdit(props.el._id)}>
            <BiEditAlt />
          </QA.CommentButton>
          <QA.CommentButton onClick={props.onClickDelete(props.el._id)}>
            <AiFillDelete />
          </QA.CommentButton>
        </QA.WrapperRight>
      </QA.Wrapper>
    </>
  );
}
