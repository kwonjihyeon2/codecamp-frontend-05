import { useContext } from "react";
import { EditContext } from "../../../../pages/quiz/context/edit";

export default function QuizPresenter() {
  const isEdit = useContext(EditContext);

  return (
    <div>
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
    </div>
  );
}
