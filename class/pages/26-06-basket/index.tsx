import { gql, useQuery } from "@apollo/client";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onclickBasket = (el: IBoard) => () => {
    console.log(el);
    // 1. delete el.__typename 원본 삭제 좋은 방법 아님

    // 2. 데이터 새로고침된다. -> 클릭한 데이터 쌓으려면?
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]"); //문자열로 가져오게됨 -> 객체로 변환필요

    //3. 중복 데이터 처리
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id); //담을 _id와 장바구니에 담긴_id와 같으면
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      return;
    }

    const { __typename, ...newEl } = el; //delete대신 rest parameter 이용
    baskets.push(newEl); //typename이 빠진 새로운 객체를 baskets에 넣고
    localStorage.setItem("basket", JSON.stringify(baskets)); //넣은 baskets를 로컬에 저장한다.
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onclickBasket(el)}>담기</button>
        </div>
      ))}
    </div>
  );
}
