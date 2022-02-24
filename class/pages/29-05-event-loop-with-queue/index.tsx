// setInterval( () => {
//     document.getElement
// }) 싸이월드 인증번호 관련

export default function TaskQueuePage() {
  const onClickTimer = () => {
    console.log("---시작---");

    //비동기 작업 : 매크로큐
    setTimeout(() => {
      console.log(
        "setTimeout -> 매크로 큐에 들어감미댜 0초 뒤 실행될 거에요 !"
      );
    }, 0);

    //콜스택실행 이후 매크로보다 먼저 : 마이크로큐
    new Promise((resolve) => {
      resolve("철수");
    }).then((res) => console.log("promise -> 마이크로큐에담긴댜규!! - 1"));

    setInterval(() => {
      console.log("setInterval 매크로큐에 들어가지롱 0초마다 실행된다구 ~!");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 900000000; i += 1) {
      sum = sum + 1;
    }

    new Promise((resolve) => {
      resolve("철수");
    }).then((res) => console.log("promise -> 마이크로큐에담긴댜규!! - 2"));

    console.log("끝!!");
  };

  return <button onClick={onClickTimer}>타이머 시작</button>;
}
