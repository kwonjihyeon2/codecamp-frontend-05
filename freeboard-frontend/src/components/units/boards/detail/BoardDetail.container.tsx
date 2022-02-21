import { useRouter } from "next/router";
import FreeBoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  FETCH_DELETE_BOARD,
  LIKE_BOARD,
  DIS_LIKE_BOARD,
} from "./BoardDetail.queries";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function FreeBoardDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.board_Id) },
    }
  );

  const GoList = () => {
    router.push("/boards");
  };

  const GoEditPage = () => {
    router.push(`/boards/${router.query.board_Id}/edit`);
  };

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(FETCH_DELETE_BOARD);
  const DeleteDetailBoard = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.board_Id) },
      });
      console.log(router.query.board_Id);
      Modal.success({ content: "게시물이 삭제되었습니다" });
      router.push("/boards");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [Like, setLike] = useState(0);
  const [LikeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const LikeBtn = async () => {
    try {
      await LikeBoard({
        variables: { boardId: String(router.query.board_Id) },
        refetchQueries: [
          {
            variables: { boardId: String(router.query.board_Id) },
            query: FETCH_BOARD,
          },
        ],
      });

      console.log(Like, data?.fetchBoard.likeCount);
      setLike(Number(data?.fetchBoard.likeCount));
    } catch (error) {
      console.log(error.message);
    }
  };

  const [DisLike, setDisLike] = useState(0);
  const [DisLikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DIS_LIKE_BOARD);
  const DisLikeBtn = async () => {
    try {
      await DisLikeBoard({
        variables: { boardId: String(router.query.board_Id) },
        refetchQueries: [
          {
            variables: { boardId: String(router.query.board_Id) },
            query: FETCH_BOARD,
          },
        ],
      });
      console.log(DisLike, data?.fetchBoard.dislikeCount);
      setDisLike(Number(data?.fetchBoard.dislikeCount));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FreeBoardDetailUI
      GoList={GoList}
      GoEditPage={GoEditPage}
      deleteBoard={DeleteDetailBoard}
      LikeBtn={LikeBtn}
      DisLikeBtn={DisLikeBtn}
      data={data}
    />
  );
}
