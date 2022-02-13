import QuizPresenter from "./quiz.presenter";

export default function QuizContainer() {
  return <>{QuizPresenter({ child: "철수", age: 13 })} </>;
}
