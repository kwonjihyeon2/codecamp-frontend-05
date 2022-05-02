import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { getMyDate, handelError } from "../../../../commons/libraries/uitils";
import * as S from "./soldItem.style";

const FETCH_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
    }
  }
`;

export default function SoldItemContainer() {
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsISold">>(FETCH_ISOLD, {
    variables: { search: "", page: 1 },
  });
  console.log(data);

  return (
    <div>
      <S.BuyTitle>판매내역</S.BuyTitle>
      <S.BuyItemListBox>
        {data?.fetchUseditemsISold.map((el) => (
          <S.BuyItemBox key={uuidv4()}>
            <div>{getMyDate(el.createdAt)}</div>
            <S.ItemInfoBox>
              <div style={{ width: "50px", height: "50px" }}>
                <img
                  style={{ width: "100%" }}
                  src={`https://googlestorage.com/${el.images?.[0]}`}
                  onError={handelError}
                />
              </div>
              <div>
                <div>{el.name}</div>
                <div>{el.price}원</div>
              </div>
            </S.ItemInfoBox>
          </S.BuyItemBox>
        ))}
      </S.BuyItemListBox>
    </div>
  );
}
