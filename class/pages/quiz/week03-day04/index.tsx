import { useQuery, gql } from "@apollo/client";
import BoardsSample from "../../../src/components/units/week03-day04/boards";
import PaginationSample from "../../../src/components/units/week03-day04/Pagination";
import * as S from "../../../src/components/units/week03-day04/PaginationSample.styles";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PageNationSample() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const { data: databoardscount } = useQuery(FETCH_BOARD_COUNT);

  const LastPage = Math.ceil(databoardscount?.fetchBoardsCount / 10);

  return (
    <S.Wrapper>
      <div>
        <BoardsSample data={data} />
        <PaginationSample refetch={refetch} LastPage={LastPage} />
      </div>
    </S.Wrapper>
  );
}
