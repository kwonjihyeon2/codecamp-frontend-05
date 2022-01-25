import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import FreeBoardCommentsListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { Modal } from "antd";
// import { IBoardCommentProps } from "./BoardComment.types"

export default function FreeBoardCommentsList() {
  const router = useRouter();

  const [myWriter, setMywriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContents, setMyContents] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [length, setLength] = useState(0);

  const { data } = useQuery(FETCH_BOARD_COMMENT, {
    variables: { page: 1, boardId: String(router.query.board_Id) },
  });
  // console.log(data?.fetchBoardComments.writer)

  const onChangeMywriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMywriter(event.target.value);
    if (event.target.value) {
      setIsActive(true);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
    const myPw = event.target.value;

    if (myPw.length > 4) {
      setIsActive(true);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMyContents(event.target.value);
    const maxLength = event.target.value.length;
    if (maxLength) {
      setIsActive(true);
    }
    setLength(maxLength);
    if (maxLength >= 100) {
      Modal.warning({
        title: "댓글 수 제한",
        content: "댓글은 100자까지 작성할 수 있습니다.",
      });
    }
  };

  const [DeleteComment] = useMutation(DELETE_BOARD_COMMENT);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [NewPassword, setNewPassword] = useState("");

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const [ModalId, setModalId] = useState("");

  const ToggleOpen = (event: ChangeEvent<HTMLButtonElement>) => {
    setIsModalVisible((prev) => !prev);
    setModalId(event.target.id);
  };

  const ToggleSetting = () => {
    setIsModalVisible((prev) => !prev);
  };

  // const { comfirm } = Modal;
  const DeleteCommentBtn = async (event: any) => {
    setIsModalVisible((prev) => !prev);

    // console.log(props.NewPassword);
    try {
      await DeleteComment({
        variables: {
          password: NewPassword,
          boardCommentId: ModalId,
        },
        refetchQueries: [
          {
            variables: { page: 1, boardId: String(router.query.board_Id) },
            query: FETCH_BOARD_COMMENT,
          },
        ],
      });
      console.log(ModalId);
      Modal.success({
        content: "댓글이 삭제되었습니다.",
      });
    } catch (error) {
      console.log(error.message);
      console.log(ModalId);
    }
    // setNewPassword("");
  };

  const [UpdateComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [isEdit, setIsEdit] = useState(false);
  const [EditId, setEditId] = useState();
  const [StarRating, setRating] = useState();

  const StarValue = (value) => {
    setRating(value);
  };

  const GetEditId = (event: any) => {
    setEditId(event.target.id);
  };

  const EditCommentBtn = async (event: any) => {
    // setIsEdit(true)
    setEditId(event.currentTarget.id);

    setIsEdit((prev) => !prev);

    try {
      const myVariables = { contents: myContents, rating: StarRating };

      if (!myContents) {
        myVariables.contents = myContents;
      }

      await UpdateComment({
        variables: {
          updateBoardCommentInput: myVariables,
          password: NewPassword,
          boardCommentId: ModalId,
        },
        refetchQueries: [
          {
            variables: { page: 1, boardId: router.query.board_Id },
            query: FETCH_BOARD_COMMENT,
          },
        ],
      });

      console.log(EditId, isEdit, myContents);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <FreeBoardCommentsListUI
        data={data}
        DeleteCommentBtn={DeleteCommentBtn}
        onChangeMywriter={onChangeMywriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        isActive={isActive}
        length={length}
        // UpdateComment={UpdateCommentBtn}
        EditComment={EditCommentBtn}
        isEdit={isEdit}
        EditId={EditId}
        StarValue={StarRating}
        NewPassword={onChangeNewPassword}
        ToggleSetting={ToggleSetting}
        isModalVisible={isModalVisible}
        ToggleOpen={ToggleOpen}
        GetEditId={GetEditId}
        // ToggleModal={ToggleModal}
      />
    </>
  );
}
