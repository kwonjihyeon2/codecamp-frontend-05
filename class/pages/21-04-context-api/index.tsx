import { createContext } from "react";
import BoardWriteConText from "../../src/components/units/21-context-api/BoardWrite.container";

export const ExampleContext = createContext(null);

const myValues = {
  isEdit: true,
};

export default function ContextAPIPage() {
  return (
    <ExampleContext.Provider value={myValues}>
      <BoardWriteConText />;
    </ExampleContext.Provider>
  );
}
