//데코레이터 예제

function qqq(aaaaa: any) {
  console.log("========");
  console.log(aaaaa);
}

@qqq
class MyBoard {}
