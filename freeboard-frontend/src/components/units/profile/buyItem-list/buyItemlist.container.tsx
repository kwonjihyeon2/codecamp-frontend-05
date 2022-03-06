import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { getMyDate, handelError } from "../../../../commons/libraries/uitils";

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
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_IBOUGHT);
  // console.log(data?.fetchUseditemsIBought);

  return (
    <div>
      <h1>
        구매내역<span>지난 3년간 구매 내역 조회가 가능합니다.</span>
      </h1>
      {data?.fetchUseditemsIBought.map((el) => (
        <div key={uuidv4()}>
          <div style={{ borderBottom: "1px solid #bdbdbd" }}>
            {getMyDate(el.createdAt)}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50px", height: "50px" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                onError={handelError}
              />
            </div>
            <div>
              <div>상품명 | {el.name}</div>
              <div>가격 | {el.price}원</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
