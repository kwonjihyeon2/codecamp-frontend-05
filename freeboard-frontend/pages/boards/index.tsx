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
  query fetchBoardCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export default function BoardListMainPage() {
  const [search, setSearch] = useState("");

  const [startPage, setStartpage] = useState(1);
  const [matchPage, setMatchPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { search, page: 1 },
  });
  const { data: dataBoardsCount, refetch: BoardsCountRefetch } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNT, {
    variables: { search },
  });

  const DebounceSearch = _.debounce((searchdata) => {
    refetch({ search: searchdata, page: 1 });
    setStartpage(1);
    setMatchPage(1);
    BoardsCountRefetch({ search: searchdata });
    setSearch(searchdata);
    console.log(data?.fetchBoards);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    DebounceSearch(event.target.value);
  };

  const LastPage = Math.ceil(Number(dataBoardsCount?.fetchBoardsCount) / 10);

  return (
    <>
      <BoardListPage
        data={data}
        onChangeSearch={onChangeSearch}
        dataBoardsCount={dataBoardsCount}
        search={search}
      />
      <Pagination
        LastPage={LastPage}
        refetch={refetch}
        setStartpage={setStartpage}
        setMatchPage={setMatchPage}
        startPage={startPage}
        matchPage={matchPage}
      />
    </>
  );
}
