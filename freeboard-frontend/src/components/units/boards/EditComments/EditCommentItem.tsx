import {
  IPropsEditItem,
  IMyVariableUpdateComment,
} from "./EditDeleteComment.types";
import * as S from "../comments/BoardComment.styles";
import { FaUserCircle, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { Rate } from "antd";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENT,
  UPDATE_COMMENT,
} from "./EditDeleteComment.queries";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { getMyDate } from "../../../../commons/libraries/uitils";

export default function EditCommentItem(props: IPropsEditItem) {
  const router = useRouter();
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");
  const InputPasswordEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };
  const InputContentEvent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(event.target.value);
  };
  const [UpdateComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_COMMENT);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [StarRating, setRating] = useState<any>();

  const StarValue = (value: any) => {
    setRating(value);
  };

  const UpdateCommentBtn = async (event: any) => {
    setIsEdit((prev) => !prev);

    const MyVariable: IMyVariableUpdateComment = {};
    if (inputContent) {
      MyVariable.contents = inputContent;
    }
    if (StarRating) {
      MyVariable.rating = StarRating;
    }

    try {
      await UpdateComment({
        variables: {
          updateBoardCommentInput: MyVariable,
          password: inputPassword,
          boardCommentId: String(event.currentTarget.id),
        },
        refetchQueries: [
          {
            variables: { page: 1, boardId: String(router.query.board_Id) },
            query: FETCH_BOARD_COMMENT,
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <S.CommentDiv key={props.el._id}>
      <div>
        <FaUserCircle size={40} />
      </div>
      <S.CommentWriterBox>
        <S.WriterRating>
          {isEdit ? (
            <div>
              <S.CommentWriter
                type="password"
                onChange={InputPasswordEvent}
                placeholder="비밀번호를 입력하세요"
              />
              <Rate
                allowHalf
                defaultValue={props.el.rating}
                onChange={StarValue}
                style={{ fontSize: 16 }}
              />
            </div>
          ) : (
            <div>
              <S.CommentWriter type="text" readOnly value={props.el.writer} />
              <Rate
                allowHalf
                value={props.el.rating}
                style={{ fontSize: 16 }}
              />
            </div>
          )}
        </S.WriterRating>
        <S.OnComments>
          {isEdit ? (
            <S.CommentArea
              onChange={InputContentEvent}
              defaultValue={props.el.contents}
              maxLength={100}
            />
          ) : (
            <S.CommentArea value={props.el.contents} readOnly={true} />
          )}
        </S.OnComments>
        <S.DateColor>{getMyDate(props.el.createdAt)}</S.DateColor>
      </S.CommentWriterBox>
      <div>
        <S.ButtonStyle id={props.el._id} onClick={UpdateCommentBtn}>
          <FaPencilAlt />
        </S.ButtonStyle>
        <S.ButtonStyle id={props.el._id} onClick={props.ToggleOpen}>
          <FaRegTrashAlt />
        </S.ButtonStyle>
      </div>
    </S.CommentDiv>
  );
}
