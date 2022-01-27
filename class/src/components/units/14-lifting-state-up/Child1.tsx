export default function Child1(props) {
  return (
    <div>
      <div>자식 1 카운트 : {props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
