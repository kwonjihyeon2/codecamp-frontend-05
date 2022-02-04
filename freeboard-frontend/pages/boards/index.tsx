import BoardListPage from "../../src/components/units/boards/list/BoardList.container";
import Pagination from "../../src/components/units/pagination/pagination";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      _id
      createdAt
    }
  }
`;

const FETCH_BOARD_COUNT = gql`
  query fetchBoardCount {
    fetchBoardsCount
  }
`;

export default function BoardListMainPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNT);

  const LastPage = Math.ceil(Number(dataBoardsCount?.fetchBoardsCount) / 10);

  return (
    <>
      <BoardListPage data={data} />
      <Pagination LastPage={LastPage} refetch={refetch} />
    </>
  );
}