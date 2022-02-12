import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // setCount((prev) => prev + 1); 화살표 함수 형식

    //함수식
    // setCount(function (prev) {
    //   //로직 추가 가능
    //   return prev + 1;
    // });

    //매개변수 바꿔보기
    setCount(function (asdf) {
      return asdf + 1;
    });
  };
  return (
    <div>
      <div>현재 카운트 : {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </div>
  );
}
