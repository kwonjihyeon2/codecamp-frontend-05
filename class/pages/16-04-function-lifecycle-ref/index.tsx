import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function FunctionLifecycleRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [count, setCount] = useState(0);

  //componentDidMount, []:dependency array 의존성 배열 - 배열안의 값이 바뀌면! useEffect를 다시 렌더링
  // 1번만 실행
  useEffect(() => {
    console.log("render된 후! 처음 한번만 그려짐, 다시 렌더될 때는 update");
    inputRef.current?.focus();

    //setCount((prev) => prev + 1);
    //setCount로 다시 렌더되면서 나는언제?+DidUpdate가 또 그려짐. 한번 페이지가 그려지는데 불필요한 리렌더링이 들어감. 비추천. 하지만 사용할 필요가 있을 땐 사용됨. 주의! 의존성배열과 함께쓰면 무한 렌더링.

    return () => {
      console.log("이 대화방에서 나가겠습니다.");
    }; //componentWillUnmount의 기능
  }, [count]);

  //componentDidUpdate 비슷, 의존성배열이 없으므로 변경되는 게 있으면 다시 렌더링
  //최초 한번은 실행, Update는 변경되는 값이 있었을때 실행됐었음.
  useEffect(() => {
    console.log("수정되고 다시 그려짐 - rerender는 여기서");
  });

  const onClickCounter = () => {
    console.log(count);
    setCount((prev) => prev + 1);
    console.log("카운터를 클릭하셨습니다.");
  };

  const onclickMove = () => {
    router.push("/16-01-class-counter");
  };

  console.log("나는 언제 실행되게?"); //componentDidMount와 useEffect 실행 시기 비교 useEffect : HTML이 다 만들어지고나서 useEffect가 실행,

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
