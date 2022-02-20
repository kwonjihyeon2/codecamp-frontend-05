import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";

const FETCH_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      contents
      remarks
      price
    }
  }
`;

export default function ItemList() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_ITEMS);
  console.log(data);

  const MoveToDetail = (el: IUseditem) => () => {
    router.push(`/market/${el._id}`);
  };

  return (
    <div>
      {data?.fetchUseditems.map((el) => (
        <div key={uuidv4()} onClick={MoveToDetail(el)}>
          <span>{el.name}</span>
          <span>{el.remarks}</span>
        </div>
      ))}
    </div>
  );
}
