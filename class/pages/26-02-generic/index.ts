//타입스크립트 타입 점검

//1. string
export function getString(args: string): string {
  return args;
  //return 값에 대한 타입은 함수()'여기 작성'{}
}
const result1 = getString("철수");
console.log(result1);

//
//2.number
export function getNumber(args: number): number {
  return args;
}
const result2 = getNumber(8);
console.log(result2);

//
//3. any - 어떤 타입이든 확정 x 어떤 값이든 들어올 수 있고 값에 따라 타입이 추론됨
export function getAny(args: any): any {
  return args;
}

const Result31 = getAny("철수");
const Result32 = getAny(8);
const Result33 = getAny(true);

console.log(Result31);
console.log(Result32);
console.log(Result33);

//
//4.Generic : 들어온 값을 타입으로 설정 "철수" -> type : "철수"
export function getGeneric<MyType>(args: MyType): MyType {
  return args;
}
const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result41 = getGeneric(aaa);
const result42 = getGeneric(bbb);
const result43 = getGeneric(ccc);

console.log(result41);
console.log(result42);
console.log(result43);

//
//5. 응용
//5-1. any
// prettier-ignore
export function getAnyReverse(args: any, args2 : any, args3 : any): [any, any, any] { return [args3, args2, args]; }

const result5 = getAnyReverse("철수", "다람쥐초등학교", 8);
console.log(result5);

//
//5-2. generic
// prettier-ignore
export function getGenericReverse<MyType1, MyType2, MyType3>(args1 : MyType1, args2 : MyType2, args3 : MyType3) : [MyType3, MyType2, MyType1]{
    return [args3, args2, args1]
}

const result6 = getGenericReverse("철수", "다람쥐초등학교", 8);
console.log(result6);

//
//6.실무 : 축약버전 -1
export function getGenericReverseT<T1, T2, T3>(
  args1: T1,
  args2: T2,
  args3: T3
): [T3, T2, T1] {
  return [args3, args2, args1];
}

const result7 = getGenericReverse("철수", "다람쥐초등학교", 8);
console.log(result7);

//
//축약버전 -2
export function getGenericReverseTUV<T, U, V>(
  args1: T,
  args2: U,
  args3: V
): [V, U, T] {
  return [args3, args2, args1];
}
const result8 = getGenericReverse("철수", "다람쥐초등학교", 8);
// const result8 = getGenericReverse<string, string, number>('철수','다람쥐초등학교',8) 타입 강제로 지정해놓을수도있음.
console.log(result8);
