import { useQuery, gql } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      _id
    }
  }
`;

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationNextPage() {
  const [startPage, setStartPage] = useState(1);
  //startPage는 시작페이지를 지정한 것 !== 현재페이지 혼동 주의
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
    //page 시작 기준을 starPage로 두면 함수 호출 시 refetch 안써도됨.
  });

  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: MouseEvent) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    // refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (startPage + 10 < lastPage) setStartPage((prev) => prev + 10);
    //if(startPage +10 > lastpage) return; 도 가능
    // refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <h1>페이지네이션 연습</h1>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          {el.title} {el.writer}
        </div>
      ))}
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {` ${index + startPage} `}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음 페이지</span>
    </div>
  );
}
