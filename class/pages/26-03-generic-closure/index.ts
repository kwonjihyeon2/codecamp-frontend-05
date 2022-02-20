// 1.클로저 - 기초
export function firstFunc(args1: string) {
  return function secondFunc(args2: number): [string, number] {
    return [args1, args2];
  };
}
const resultFunc1 = firstFunc("영희")(10);
console.log(resultFunc1);

//
//
// 2.클로저 - 기초(any)
export function firstFunc2(args1: any) {
  return function secondFunc2(args2: any): [any, any] {
    return [args1, args2];
  };
}
const resultFunc2 = firstFunc2("영희")(10);
console.log(resultFunc2);

//
//
// 3.클로저 - 기초(generic)
// 어떤 값이 들어올 지 확정되지않았지만 값이 들어왔을 때 해당 타입을 확정할 수 있음
export function firstFunc3<T>(args1: T) {
  return function secondFunc3<U>(args2: U): [T, U] {
    return [args1, args2];
  };
}
const resultFunc3 = firstFunc3("영희")(10);
console.log(resultFunc3);

//
//
//4. 클로저 - 기초(generic) - 화살표 함수
// prettier-ignore
export const firstFunc4 = <T>(args1: T) => <U>(args2: U): [T, U] => {
    return [args1, args2];
  };
const resultFunc4 = firstFunc4("영희")(10);
console.log(resultFunc4);

//
//
//5. 클로저 - 기초(generic) - HOC
// prettier-ignore
export const firstFunc5 = <C>(Component : C) => <P>(props: P): [C, P] => {
  return [Component, props];
};
const resultFunc5 = firstFunc5("Component")({ aaa: "철수" }); //(Component) => (props) => { }
console.log(resultFunc5);
