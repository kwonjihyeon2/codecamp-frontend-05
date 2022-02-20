import { useEffect } from "react";
import { useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

//비회원으로 장바구니 담았다가 로그인하면 장바구니에 담은 데이터 정보 남아있게
export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  //이미 저장된 데이터를 받아오게 - 브라우저LocalStorage에서 데이터 받아올 수 있음
  //if(typeof window !== "undefined") 이나 if(process.browser) 방법도 있지만 useEffect사용해서 브라우저에서 렌더될 때 한번만 그려지도록
  //오늘 본 상품, 장바구니 삭제 등으로 응용가능 ㅜ.ㅜ
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <div>
      <div>나만의 장바구니 - 비회원전용</div>
      {basketItems.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
}
