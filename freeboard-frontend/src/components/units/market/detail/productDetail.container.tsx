import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";
import { FETCH_USED_ITEM, DELETE_ITEM } from "./productDetail.queries";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";

export default function ItemDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.ItemId) },
  });

  console.log(data);

  const { moveToPage } = MoveToPageHook();
  const { todayView, setTodayView } = useContext(MakeGlobalContext);
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

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (setTodayView) setTodayView(baskets);
  }, []);

  return (
    <div>
      <h1>상품 상세정보 페이지</h1>
      <div>
        상품명 <input type="text" value={data?.fetchUseditem.name || ""} />
      </div>
      <div>
        간단설명 <input type="text" value={data?.fetchUseditem.remarks || ""} />
      </div>
      상품 설명
      {process.browser && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchUseditem.contents)),
          }}
        />
      )}
      <div>
        판매가격 <input type="text" value={data?.fetchUseditem.price || ""} />
      </div>
      <div>
        태그 <input type="text" />
      </div>
      <div>거래위치</div>
      <div>
        <p>이미지</p>
        <div key={uuidv4()}>
          <div>
            <img
              style={{ width: "100px" }}
              src={`https://storage.googleapis.com/${data?.fetchUseditem.images[0]}`}
              alt="이미지"
            />
            <img
              style={{ width: "100px" }}
              src={`https://storage.googleapis.com/${data?.fetchUseditem.images[1]}`}
              alt="이미지"
            />
          </div>
        </div>
        {/* {data?.fetchUseditem.images.map((el) => (
          <div key={uuidv4()}>
            <img
              src={`https://storage.googleapis.com/${data?.fetchUseditem.images[0]}`}
              alt="이미지"
            />
          </div>
        ))} */}
      </div>
      <button onClick={moveToPage("/market")}>목록으로</button>
      <button onClick={moveToPage(`/market/${router.query.ItemId}/edit`)}>
        수정하기
      </button>
      <button onClick={onClickDeleteItem}>삭제하기</button>
      <div>
        <h1>오늘 본 상품</h1>
        <div>
          {todayView?.map((el) => (
            <div key={uuidv4()}>
              <span>{el.name}</span>
              <span>{el.remarks}</span>
              <span>{el.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>댓글</h1>
      </div>
    </div>
  );
}
