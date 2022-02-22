import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";
import { FETCH_USED_ITEM, DELETE_ITEM } from "./productDetail.queries";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import * as L from "./productDetail.style";
import ProductMyInput from "../../../commons-components/input/market/index";

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
    <L.Wrapper>
      <L.WrapperBody>
        <div>
          <L.WrapperContents>
            <div>
              {data?.fetchUseditem.images.map((_: any, index: number) => (
                <div key={uuidv4()}>
                  <div>
                    <img
                      style={{ width: "80%" }}
                      src={`https://storage.googleapis.com/${data?.fetchUseditem.images[index]}`}
                      alt="이미지"
                    />
                  </div>
                </div>
              )) && (
                <div>
                  <img
                    style={{ width: "80%" }}
                    src="/basic.jpeg"
                    alt="이미지"
                  />
                </div>
              )}
            </div>
            <div>
              <h1>
                상품명{" "}
                <ProductMyInput
                  type="text"
                  value={data?.fetchUseditem.name || ""}
                />
              </h1>
              <div>
                간단설명{" "}
                <ProductMyInput
                  type="text"
                  value={data?.fetchUseditem.remarks || ""}
                />
              </div>
              <div>
                판매가격{" "}
                <input type="text" value={data?.fetchUseditem.price || ""} />
                {/* 이걸로 할인가격 나타내보자 */}
              </div>
              <div>
                태그 <input type="text" />
              </div>
              <div>거래위치</div>
              <button onClick={moveToPage("/market")}>목록으로</button>
              <button
                onClick={moveToPage(`/market/${router.query.ItemId}/edit`)}
              >
                수정하기
              </button>
              <button onClick={onClickDeleteItem}>삭제하기</button>
              <div>
                <button>찜</button>
                <button>장바구니 담기</button>
              </div>
            </div>
          </L.WrapperContents>
          <L.WrapperDetail>
            상품 설명
            {process.browser && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(data?.fetchUseditem.contents)
                  ),
                }}
              />
            )}
          </L.WrapperDetail>
        </div>

        <L.ViewBox>
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
        </L.ViewBox>
      </L.WrapperBody>
    </L.Wrapper>
  );
}
