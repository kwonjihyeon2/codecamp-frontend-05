import { IPropsEditItem } from "./EditDeleteComment.types";
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

export default function EditCommentItem(props: IPropsEditItem) {
  const router = useRouter();
  const [inputPassword, setInputPassword] = useState("");
  const [inputContent, setInputContent] = useState("");
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
  const [isEdit, setIsEdit] = useState(false);
  const [StarRating, setRating] = useState();

  const StarValue = (value: any) => {
    setRating(value);
  };

  const UpdateCommentBtn = async (event: any) => {
    setIsEdit((prev) => !prev);

    const MyVariable = { contents: inputContent, rating: StarRating };
    if (!inputContent) {
      MyVariable.contents = inputContent;
    }
    if (!StarRating) {
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
        <FaUserCircle size={50} />
      </div>
      <S.CommentWriterBox>
        <S.WriterRating>
          {isEdit ? (
            <div>
              <Rate
                allowHalf
                defaultValue={props.el.rating}
                onChange={StarValue}
              />
              <div>
                <input type="text" value={props.el.writer} readOnly />
                <input
                  type="password"
                  onChange={InputPasswordEvent}
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
            </div>
          ) : (
            <div>
              <Rate allowHalf value={props.el.rating} />
              <div>
                <input type="text" readOnly value={props.el.writer} />
              </div>
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
        <S.DateColor>{props.el.createdAt}</S.DateColor>
      </S.CommentWriterBox>
      <div>
        <button id={props.el._id} onClick={UpdateCommentBtn}>
          <FaPencilAlt />
        </button>
        <button id={props.el._id} onClick={props.ToggleOpen}>
          <FaRegTrashAlt />
        </button>
      </div>
    </S.CommentDiv>
  );
}
