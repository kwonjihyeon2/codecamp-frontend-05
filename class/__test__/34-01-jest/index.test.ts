// describe("내가 하고싶은 큰 범위 테스트", () => {
//     //테스트명, 테스트 할 부분

//     it("내가 하고싶은 작은 범위 테스트", ()=>{

//     })

// })
import { add } from "../../pages/34-01-jest";

it("더하기 테스트", () => {
  const result = add(3, 5);

  expect(result).toBe(8); //예상되는 결과값
});
