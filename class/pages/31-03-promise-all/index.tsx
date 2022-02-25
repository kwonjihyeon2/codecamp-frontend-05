export default function PromiseAllPage() {
  //promise 결과값
  //fulfilled 완료
  //rejected 거절
  //pending 대기

  //console.time - timeEnd 시간체크가능

  const onClickPromise = async () => {
    console.time("promise 시작");

    const result = await new Promise((resolve, reject) => {
      //시간이 소요되는 로직이 있을때 사용 axios, fetch ...
      setTimeout(() => {
        resolve("철수");
      }, 3000);
    });
    console.log(result);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("영희");
      }, 3000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 3000);
    });
    console.log(result3);

    console.timeEnd("promise 시작");
  };

  const onClickPromiseAll = async () => {
    //1, 하나하나 각각 입력하는 방법

    // console.time("PromiseAll 시작");

    // const results = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     //시간이 소요되는 로직이 있을때 사용 axios, fetch ... -> 모두 Promise로 만들어진 것
    //     //createProduct(), uploadFile() ... 동시요청하게됨.
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("영희");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("훈이");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(results);

    // console.timeEnd("PromiseAll 시작");

    // 2. map을 사용해서 간소화하기
    console.time("PromiseAll시작!!");
    const classmates = ["철수", "영희", "훈이"];
    // classmates 업로드 파일로 바꾸기
    // * Promise.race 먼저 끝난 애 받아오기
    const results = await Promise.all(
      classmates.map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(results);
    console.timeEnd("PromiseAll시작!!");
  };

  return (
    <div>
      <button onClick={onClickPromise}>시작하기</button>
      <button onClick={onClickPromiseAll}>시작하기 !! - promise.all </button>
    </div>
  );
}
