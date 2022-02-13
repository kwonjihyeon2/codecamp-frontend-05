interface IProps {
  child: string;
  age: number;
}

export default function QuizPresenter(props: IProps) {
  return (
    <div>
      {props.child}는 {props.age}살 입니다.
    </div>
  );
}
