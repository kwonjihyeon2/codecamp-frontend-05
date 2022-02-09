import {
  IPropsEditItem,
  IMyVariableUpdateComment,
} from "./EditDeleteComment.types";
import * as S from "../comments/BoardComment.styles";
import { FaUserCircle, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { Rate } from "antd";
import { MouseEvent, ChangeEvent, useState } from "react";
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

  const [inputEvent, setInputEvent] = useState({
    password: "",
    contents: "",
  });

  const ChangeInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEvent({
      ...inputEvent,
      [event.target.id]: event.target.value,
    });
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

  const UpdateCommentBtn = async (event: MouseEvent<HTMLButtonElement>) => {
    setIsEdit((prev) => !prev);

    const MyVariable: IMyVariableUpdateComment = {};
    if (inputEvent.contents) {
      MyVariable.contents = inputEvent.contents;
    }
    if (StarRating) {
      MyVariable.rating = StarRating;
    }

    try {
      await UpdateComment({
        variables: {
          updateBoardCommentInput: MyVariable,
          password: inputEvent.password,
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
  // 수정에 대한 css를 다시 지정할 필요없이 기존 등록하기 component를 가져오는 방법이 있음
  return (
    <S.EditBox>
      <S.CommentDiv key={props.el._id}>
        <div>
          <FaUserCircle size={40} />
        </div>
        <S.CommentWriterBox>
          <S.WriterRating>
            <S.CommentWriter type="text" readOnly value={props.el.writer} />
            {isEdit ? (
              <div>
                <S.CommonsInput
                  type="password"
                  id="password"
                  onChange={ChangeInputEvent}
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
              <S.ChangeComment
                id="contents"
                onChange={ChangeInputEvent}
                defaultValue={props.el.contents}
                maxLength={100}
              />
            ) : (
              <S.CommentArea value={props.el.contents} readOnly />
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
    </S.EditBox>
  );
}
