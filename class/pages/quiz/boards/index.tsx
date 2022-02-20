import { gql, useQuery } from "@apollo/client";
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

export default function QuizBasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [isResult, setIsresult] = useState("");

  const onClickBasket = (el: IBoard) => () => {
    const basket = JSON.parse(localStorage.getItem("save") || "[]");
    const temp = basket.filter((basketEl: IBoard) => basketEl._id === el._id);
    const newBasket = basket.filter(
      (newBasketEl: IBoard) => newBasketEl._id !== el._id
    );
    const { __typename, ...newEl } = el;

    setIsresult(el._id);
    if (temp.length === 1) {
      localStorage.setItem("save", JSON.stringify(newBasket));
      setIsresult("");
      return;
    }

    // console.log(newEl, basket);
    basket.push(newEl);
    localStorage.setItem("save", JSON.stringify(basket));
    setIsresult(el._id);
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.writer}</span>
          <button onClick={onClickBasket(el)}>
            게시물 {isResult === el._id ? "담기 취소" : "담기"}
          </button>
        </div>
      ))}
    </div>
  );
}
