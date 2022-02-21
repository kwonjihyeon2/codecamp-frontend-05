import { gql, useQuery } from "@apollo/client";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      _id
    }
  }
`;

export default function ResultPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });

  return (
    <div>
      <div>작성자 : {data?.fetchBoard.writer} </div>
      <div>제목 : {data?.fetchBoard.title} </div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(String(data?.fetchBoard.contents)),
        }}
      />
    </div>
  );
}
