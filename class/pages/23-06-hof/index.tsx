import { MouseEvent } from "react";

export default function HofPage() {
  const onClickChid = (el: string) => (event: MouseEvent<HTMLDivElement>) => {
    console.log(el);
  };
  return (
    <div>
      <h1>HOF연습페이지입니다</h1>
      {["철수", "영희", "훈이"].map((el, index) => (
        <div key={el} onClick={onClickChid(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}
