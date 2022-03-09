import { useRouter } from "next/router";
import Head from "next/head";

export default function BoardsDetailPage() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:title" content="게시판 테스트👻" />
        <meta property="og:description" content="게시판 방문을 환영합니다 🐣" />
        <meta
          property="og:image"
          content="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        />
      </Head>
      <div>
        안녕하세요 게시글 상세페이지입니다. 게시글 ID는 {router.query.boardId}
        입니다.
      </div>
    </div>
  );
}
