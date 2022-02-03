import Router from "next/router";
import { useEffect } from "react";
import { useState, useRef } from "react";

export default function FunctionCounterPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("render된 후! 처음 한번만 그려짐, 다시 렌더될 때는 update");
    inputRef.current?.focus();

    return () => {
      console.log("이 대화방에서 나가가겠습니다.");
    };
  }, []);

  useEffect(() => {
    console.log("수정되고 다시 그려짐 - rerender는 여기서");
  });

  const onClickCounter = () => {
    console.log(count);
    setCount((prev) => prev + 1);
    console.log("카운터를 클릭하셨습니다.");
  };

  const onclickMove = () => {
    Router.push("/16-01-class-counter");
  };

  // 기능을 보여줄 공간
  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재 카운트 : {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onclickMove}>나가기</button>
    </div>
  );
}
