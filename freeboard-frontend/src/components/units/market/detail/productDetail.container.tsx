import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;

export default function ItemDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.ItemId) },
  });

  const { moveToPage } = MoveToPageHook();
  return (
    <div>
      <h1>상품 상세정보 페이지</h1>

      <div>
        상품명 <input type="text" value={data?.fetchUseditem.name || ""} />
      </div>
      <div>
        간단설명 <input type="text" value={data?.fetchUseditem.remarks || ""} />
      </div>
      <div>
        상품설명{" "}
        <input type="text" value={data?.fetchUseditem.contents || ""} />
      </div>
      <div>
        판매가격 <input type="text" value={data?.fetchUseditem.price || ""} />
      </div>
      <div>
        태그 <input type="text" />
      </div>
      <div>거래위치</div>
      <div>이미지</div>
      <button onClick={moveToPage("/market")}>수정하기</button>
      <button>삭제하기</button>
    </div>
  );
}
