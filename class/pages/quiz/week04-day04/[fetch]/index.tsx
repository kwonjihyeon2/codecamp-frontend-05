import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      writer
      contents
    }
  }
`;

export default function SearchFetchPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.fetch) },
    }
  );
  return (
    <div>
      <div>
        <div>작성자 : {data?.fetchBoard.writer}</div>
        <div>제목 : {data?.fetchBoard.title}</div>
        <div>내용 : {data?.fetchBoard.contents}</div>
      </div>
    </div>
  );
}
