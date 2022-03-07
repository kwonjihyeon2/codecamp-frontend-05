import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { handelError } from "../../../../commons/libraries/uitils";

const FETCH_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      images
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
      <h1>판매내역</h1>
      <div>
        {data?.fetchUseditemsISold.map((el) => (
          <div key={uuidv4()}>
            <div>
              <img
                src={`https://googlestorage.com/${el.images?.[0]}`}
                onError={handelError}
              />
            </div>
            <div>{el.name}</div>
            <div>{el.price}원</div>
          </div>
        ))}
      </div>
    </div>
  );
}
