import InfiniteScroll from "react-infinite-scroller";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled/";

const FETCH_BOARD_COMMENT = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 200px;
  overflow: auto;
`;
export default function InfiniteScrollCompo() {
  //   const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENT, {
    variables: { page: 1, boardId: "61f3d4be8cd4860029b48f16" },
  });

  const LoadComment = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
        boardId: String("61f3d4be8cd4860029b48f16"),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };
  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={LoadComment}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoardComments.map((el: any) => (
          <div key={el._id}>
            <span>{el.contents}</span>
            <span>{el.writer}</span>
            <span>{el.rating}</span>
          </div>
        ))}
      </InfiniteScroll>
    </Container>
  );
}
