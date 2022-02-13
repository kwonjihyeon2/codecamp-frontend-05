import QuizContainer from "../../../../src/components/units/example/write.container";
import { createContext } from "react";

export const EditContext = createContext(false);

const MyEdit = {
  isEdit: true,
};

export default function EditPage() {
  return (
    <EditContext.Provider value={MyEdit}>
      <QuizContainer />
    </EditContext.Provider>
  );
}
