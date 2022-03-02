import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      likeCount
      _id
    }
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "621c2067155b2d0029673581" },
    }
  );
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: {
        boardId: "621c2067155b2d0029673581",
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "621c2067155b2d0029673581" },
      //     },
      //   ],
      //이 방식은 Back으로 요청하고 결과를 받아오는 방식 - 느림. but 캐시 수정도 받아온 데이터를 수정하는 방식 - refetch보다는 효율적,
      optimisticResponse: {
        //최종 데이터 적용 전 미리 표출해주는 방식
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        //data : likeBoard요청을 통해 받아온 데이터
        cache.writeQuery({
          //writeQuery : 해당 캐시를 직접 작성한다
          query: FETCH_BOARD,
          variables: { boardId: "621c2067155b2d0029673581" },
          data: {
            //기존 query영역에 바꿔줄 데이터를 입력
            fetchBoard: {
              _id: "621c2067155b2d0029673581",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현재 카운트(좋아요) : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
