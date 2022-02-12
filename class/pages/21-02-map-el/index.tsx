export default function MapElPage() {
  //기본
  // ["철수", "영희", "훈이"].forEach((el, index) => {
  //     console.log(el);
  //     console.log(index);
  //   });

  //매개변수 변경
  //   ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
  //     console.log("el ", asdf);
  //     console.log("index", qwer);
  //   });

  //함수선언식 방법
  //   ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
  //     console.log("el ", asdf);
  //     console.log("index", qwer);
  //   });

  //el과 index바꿔보기 => 파라미터 이름은 중요하지않음 실제로 뭐가들어오는지 확인!
  ["철수", "영희", "훈이"].forEach(function (index, el) {
    console.log("el ", el);
    console.log("index", index);
  });

  return <></>;
}
