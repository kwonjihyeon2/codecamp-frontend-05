import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { getMyDate, handelError } from "../../../../commons/libraries/uitils";
import * as B from "./buyItemlist.styled";
import InfiniteScroll from 'react-infinite-scroller';

const FETCH_IBOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      name
      remarks
      contents
      price
      images
      createdAt
    }
  }
`;

export default function BuyListContainer() {
  const { data , fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_IBOUGHT);
  // console.log(data?.fetchUseditemsIBought);

  const MoreLoadData = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsIBought.length / 10) + 1,
        search: "",
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemsIBought)
          return { fetchUseditemsIBought: [...prev.fetchUseditemsIBought] };

        return {
          fetchUseditemsIBought: [
            ...prev.fetchUseditemsIBought,
            ...fetchMoreResult?.fetchUseditemsIBought,
          ],
        };
      },
    })
  }

  return (
    <div>
      <B.BuyTitle>
        구매내역
        <B.BuyTitleSpan>지난 3년간 구매 내역 조회가 가능합니다.</B.BuyTitleSpan>
      </B.BuyTitle>
      <B.BuyItemListBox >
        <InfiniteScroll
            pageStart={0}
            loadMore={MoreLoadData}
            hasMore={true}
            useWindow={false}
        >
        {data?.fetchUseditemsIBought.map((el) => (
          <B.BuyItemBox key={uuidv4()}>
            <div>{getMyDate(el.createdAt)}</div>
            <B.ItemInfoBox>
              <div style={{ width: "50px", height: "50px" }}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  onError={handelError}
                />
              </div>
              <div>
                <div>구매 상품 | {el.name}</div>
                <div>구매 가격 | <B.ItemPrice>{el.price}</B.ItemPrice>원</div>
              </div>
            </B.ItemInfoBox>
          </B.BuyItemBox>
        ))}
        </InfiniteScroll>
      </B.BuyItemListBox>
    </div>
  );
}
