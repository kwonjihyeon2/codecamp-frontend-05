//ES6 set

a = new Set([1, 2, 3, 2]);
typeof a;
b = [1, 2, 3];
Array.isArray(a);
//1.배열 형태를 가지는 객체데이터
//2. 고유한 값만 저장(중복데이터x)

a.add(4); //데이터 추가
a.delete(2); //데이터 삭제 및 실행 결과 알려줌

a.has(2); //데이터 조회 있으면 true

a.size; //데이터 길이

//반복문 사용 가능 요소 갯수만큼 반복해서 보여줌
a.forEach((el) => {
  console.log(a);
});

b = Array.from(a);
b; //배열로 반환

a.clear(); //데이터 초기화

a;
