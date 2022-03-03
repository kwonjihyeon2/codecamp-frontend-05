import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestPage from "../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존이랑 바뀐 게 없는지 비교 - snapshot", () => {
  const result = render(<JestUnitTestPage />);

  expect(result.container).toMatchSnapshot();
  //컨테이너가 대상. 만들어둔게 없으면 생성, 있다면 비교
});
