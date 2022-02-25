function solution(board, moves) {
  let answer = 0;

  const bucket = [];
  // 1. 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    //2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값
    for (let l = 0; l < board.length; l++) {
      const doll = board[l][moves[i] - 1];

      // 3. 인형이 있는 칸이 빈칸이 아니라면
      if (doll !== 0) {
        board[l][moves[i] - 1] = 0;
        // 4.바구니에 넣으려는 인형과 바구니 === 마지막에 있는 인형
        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          // bucket.pop(); 마지막 인형 제거, 다른 메서드는 splice
          bucket.splice(bucket.length - 1, 1);
          break; //반복문 종료로 아래 로직 읽지않음
        }
        bucket.push(doll);
        break;
      }
    }
  }
  return answer;
}

//method
function solution(board, moves) {
  let answer = 0;

  const bucket = [];
  //forEach - break 안된다. 대신 반복문 실행에 대한 변수 조건 제시-> 반복안하는것처럼보여주기
  moves.forEach((move) => {
    let pick = false;
    board.forEach((location) => {
      const doll = location[move - 1];

      if (pick === false) {
        if (doll !== 0) {
          location[move - 1] = 0;

          if (bucket[bucket.length - 1] === doll) {
            bucket.splice(bucket.length - 1, 1);
            answer += 2;
          } else {
            bucket.push(doll);
          }
          pick = true;
        }
      }
    });
  });
  return answer;
}
