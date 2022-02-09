import BoardListPage from "../../src/components/units/boards/list/BoardList.container";
import Pagination from "../../src/components/commons-components/pagination/list/pagination";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
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
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { search, page: 1 },
  });
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNT);

  const DebounceSearch = _.debounce((searchdata) => {
    refetch({ search: searchdata, page: 1 });
    setSearch(searchdata);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    DebounceSearch(event.target.value);
  };

  const LastPage = Math.ceil(Number(dataBoardsCount?.fetchBoardsCount) / 10);

  return (
    <>
      <BoardListPage data={data} onChangeSearch={onChangeSearch} />
      <Pagination LastPage={LastPage} refetch={refetch} />
    </>
  );
}
