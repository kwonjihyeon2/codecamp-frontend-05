import Boards from "../../src/components/units/14-boards-pagination/boards";
import Pagination from "../../src/components/units/14-boards-pagination/Pagination";
import { useQuery, gql } from "@apollo/client";

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
  query fetchBoardCount {
    fetchBoardsCount
  }
`;

export default function PaginationNextPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
    //page 시작 기준을 starPage로 두면 함수 호출 시 refetch 안써도됨.
  });
  //startPage는 시작페이지를 지정한 것 !== 현재페이지 혼동 주의

  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <div>
      <h1>페이지네이션 연습</h1>
      <Boards data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
