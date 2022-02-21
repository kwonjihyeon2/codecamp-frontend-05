import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import Dompurify from "dompurify";

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

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      //어떤 게시물을 조회할 것인지 알려줘야
      variables: { boardId: String(router.query.id) },
    }
  );

  return (
    <div>
      <div>작성자 : {data?.fetchBoard.writer} </div>
      <div>제목 : {data?.fetchBoard.title} </div>
      {/* <div>내용 : {data?.fetchBoard.contents} </div> //태그까지 그대로 표출(이게 문자열이었음) => 태그 속성 설정해줘야함 dangeroutsly~~ : 태그 자체를 그대로 화면에 넣어주게함 */}
      {process.browser && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      )}
    </div>
  );
}
