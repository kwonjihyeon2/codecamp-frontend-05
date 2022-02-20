import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";
import { FETCH_USED_ITEM, DELETE_ITEM } from "./productDetail.queries";

export default function ItemDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.ItemId) },
  });

  const { moveToPage } = MoveToPageHook();
  const [deleteProduct] = useMutation(DELETE_ITEM);

  const onClickDeleteItem = async () => {
    try {
      await deleteProduct({
        variables: { useditemId: String(router.query.ItemId) },
      });

      console.log(router.query.ItemId);
      router.push("/market");
    } catch (error) {
      console.log(error.message);
    }
  };

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
      <button onClick={moveToPage("/market")}>목록으로</button>
      <button onClick={moveToPage(`/market/${router.query.ItemId}/edit`)}>
        수정하기
      </button>
      <button onClick={onClickDeleteItem}>삭제하기</button>
    </div>
  );
}
