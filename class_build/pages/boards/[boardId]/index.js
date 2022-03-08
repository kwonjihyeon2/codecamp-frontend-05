import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardsDetailPage(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myBoardData.title} />
        <meta property="og:description" content={props.myBoardData.contents} />
        <meta property="og:image" content={props.myBoardData.images[0]} />
        {/* <meta property="og:title" content="테스트중입니다" />
        <meta
          property="og:description"
          content="설명이 들어가는 공간입니다 👻"
        />
        <meta
          property="og:image"
          content="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        /> */}
      </Head>
      <div>
        안녕하세요 게시글 상세 페이지입니다, 게시글 ID는 {router.query.boardId}
        입니다.
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  // pages에서만 가능한 next.js제공 함수 : 렌더될 파일보다 먼저 실행, SSR파일은 여기서 데이터 요청해야함
  // ** useRouter같은 브라우저 작동 기능을 활용할 수 없음 -> context

  const result = await request(
    "https://backend05.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );
  //return data -> props로 default 파일에 전달( = props : {} ) : 데이터가 만들어진 페이지를 렌더링하게 됨
  return {
    props: {
      myBoardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
        // ...result
        //
      },
    },
  };
};
