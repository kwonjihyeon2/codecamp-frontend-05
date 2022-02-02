// 게시물 수정페이지
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import FreeBoardWrite from "../../../../src/components/units/boards/writer/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardsEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.board_Id },
  });
  console.log(data?.fetchBoard);

  return <FreeBoardWrite isEdit={true} ToPre={data} />;
}
