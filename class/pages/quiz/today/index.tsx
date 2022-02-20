import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function TodayProduct() {
  const { data } = useQuery(FETCH_BOARDS);
  //   console.log(data?.fetchBoards);
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  const [cart, setCart] = useState([]);

  const onClickData = (el: IBoard) => () => {
    const basket = JSON.parse(
      localStorage.getItem(`${yyyy}-${mm}-${dd}`) || "[]"
    );
    const temp = basket.filter((basketEl: IBoard) => basketEl._id === el._id);

    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      return;
    }

    basket.push(el);
    localStorage.setItem(`${yyyy}-${mm}-${dd}`, JSON.stringify(basket));
  };

  useEffect(() => {
    const mydata = JSON.parse(
      localStorage.getItem(`${yyyy}-${mm}-${dd}`) || "[]"
    );
    setCart(mydata);
    console.log(cart);
  }, []);

  return (
    <div>
      <div>
        {data?.fetchBoards.map((el: IBoard) => (
          <div key={el._id} onClick={onClickData(el)}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
          </div>
        ))}
      </div>
      <div>
        <div>여기 밑으로 클릭된 데이터</div>
        {cart.map((cartEl: IBoard) => (
          <div key={cartEl._id}>
            <span>{cartEl.title}</span>
            <span>{cartEl.writer}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
