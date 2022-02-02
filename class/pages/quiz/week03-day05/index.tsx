import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled/";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      _id
      title
      contents
      createdAt
    }
  }
`;
const ScrollBox = styled.div`
  width: 100%;
  height: 350px;
  overflow: auto;
`;

const WrapperBox = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export default function InfiniteScrollPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const LoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <ScrollBox>
      <InfiniteScroll
        pageStart={0}
        loadMore={LoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards?.map((el: any, index: number) => (
          <WrapperBox key={el._id}>
            <span>{index + 1}</span>
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <span>{el.createdAt}</span>
          </WrapperBox>
        ))}
      </InfiniteScroll>
    </ScrollBox>
  );
}
