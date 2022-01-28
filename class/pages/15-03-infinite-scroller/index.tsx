import { useQuery, gql } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      _id
    }
  }
`;

export default function PaginationPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const onLoadMore = () => {
    if (!data) return; //데이터가 있으면 실행해줘 데이터가 없을때 댓글함수가 실행되면 안되니까,,

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoards.length / 10 + 1),
      }, //여긴 요청하는 것 어떤 페이지 불러올지, 현재페이지 + 1 : 다음페이지 여기서 데이터는 무조건 잇을 것 , 없으면 실행종료하기로했음.

      updateQuery: (prev, { fetchMoreResult }) => {
        //이전(현재표출중인)데이터 + 다음페이지 10개 데이터
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <div>
            <span>
              {el.title} {el.writer}
            </span>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
}
