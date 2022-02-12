import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD_COMMENT,
  DELETE_COMMENT,
} from "./EditDeleteComment.queries";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import EditBoardCommentListUI from "./EditDeleteComment.presenter";
import { Modal } from "antd";

export default function EditBoardCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: { page: 1, boardId: String(router.query.board_Id) },
  });

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_COMMENT);
  const [modalpassword, setModalPassword] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [ModalId, setModalId] = useState<string>("");

  const ModalPasswordEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setModalPassword(event.target.value);
  };

  const ToggleOpen = (event: any) => {
    setIsModalVisible((prev) => !prev);
    setModalId(event.currentTarget.id);
    console.log(event.currentTarget.id);
  };

  const ToggleSetting = () => {
    setIsModalVisible((prev) => !prev);
  };

  const DeleteCommentBtn = async () => {
    try {
      await deleteComment({
        variables: {
          password: modalpassword,
          boardCommentId: ModalId,
        },
        refetchQueries: [
          {
            variables: { page: 1, boardId: String(router.query.board_Id) },
            query: FETCH_BOARD_COMMENT,
          },
        ],
      });
      console.log(modalpassword);
      Modal.success({
        content: "댓글이 삭제되었습니다.",
      });
      setIsModalVisible((prev) => !prev);
    } catch (error) {
      console.log(error.message);
    }
  };

  const LoadComment = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
        boardId: String(router.query.board_Id),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <EditBoardCommentListUI
      data={data}
      isModalVisible={isModalVisible}
      DeleteCommentBtn={DeleteCommentBtn}
      ToggleSetting={ToggleSetting}
      ModalPasswordEvent={ModalPasswordEvent}
      ToggleOpen={ToggleOpen}
      LoadComment={LoadComment}
      fetchMore={fetchMore}
    />
  );
}
