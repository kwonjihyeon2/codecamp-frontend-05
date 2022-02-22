// setInterval( () => {
//     document.getElement
// }) 싸이월드 인증번호 관련

export default function TaskQueuePage() {
  const onClickTimer = () => {
    console.log("---시작---");

    setTimeout(() => {
      console.log("1초 뒤 실행될 거에요 !");
    }, 1000); //비동기 작업 : 바로 실행되지않는 것들 useEffect , axios

    let sum = 0;
    for (let i = 0; i <= 900000000; i += 1) {
      sum = sum + 1;
    }

    console.log("끝!!");
  };

  return <button onClick={onClickTimer}>타이머 시작</button>;
}
