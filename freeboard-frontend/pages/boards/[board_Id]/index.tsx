import FreeBoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import FreeBoardComments from "../../../src/components/units/boards/comments/BoardComment.container";
import EditBoardCommentList from "../../../src/components/units/boards/EditComments/EditDeleteComment.container";
import Head from "next/head";
import { request, gql } from "graphql-request";
import { GetServerSideProps } from "next";

interface IPropsBoard {
  data: {
    title: string;
    contents: string;
    images: string[];
  };
}

export default function BoardDetailPage(props: IPropsBoard) {
  console.log(props.data);
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.data.title} />
        <meta property="og:description" content={props.data.contents} />
        <meta
          property="og:image"
          content={
            props.data.images.length
              ? `https://storage.googleapis.com/${props.data.images[0]}`
              : "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
          }
        />
      </Head>
      <div>
        <FreeBoardDetail />
        <FreeBoardComments />
        <EditBoardCommentList />
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      contents
      title
      images
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await request(
    "https://backend05.codebootcamp.co.kr/graphql03",
    FETCH_BOARD,
    { boardId: context.query.board_Id }
  );

  return {
    props: {
      data: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
