const month = {
  //객체의 키 값 : number => month[i] 가져올 수 있음
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]; //일수 % 7 의 나머지값

function solution(a, b) {
  // 총 일수 저장 변수
  let days = 0;
  // 이전 일수 + 제시된 날
  for (let i = 1; i < a; i++) {
    days += month[i];
  }
  days += b - 1; //당일 제외
  return week[days % 7];
}

//메서드 사용
function solution(a, b) {
  //reduce 배열메서드 -> 배열로 만들어줘야함.
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    //데이터와 인덱스를 더하면 월을 가져올 수 있음 : month의 키값을 가져올 수 있음
    const mn = cur + i;
    return acc + (mn !== a ? month[mn] : b - 1);
  }, 0);

  return week[answer % 7];
}

//new Date 사용
//new Date() : 날짜에 관련된 기능을 제공하는 객체 데이터
//month 사용 주의 조회할 때 현재 달보다 1 작게 나옴 , new Date(2022, 1, 8) : 2022-02-08
//날짜에 관한 기능 사용 시 new Date ! 현재 날짜만 받아오고싶으면 Date()만 사용해도 무방.
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const answer = new Date(2016, a - 1, b).getDay();
  return week[answer];
}
