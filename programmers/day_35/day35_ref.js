const [leftNumbers, rightNumbers] = [
  // 비구조화할당
  [1, 4, 7],
  [3, 6, 9],
];

function solution(numbers, hand) {
  let answer = "";

  //현재 손가락의 위치를 저장
  const current = {
    left: 10,
    right: 12,
  };

  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      // 누를 번호가 왼쪽 키패드에 해당되는 경우
      answer += "L";
      current["left"] = numbers[i]; // 왼쪽 손가락 위치 변환
    } else if (rightNumbers.includes(numbers[i])) {
      // 누를 번호가 오른쪽 키패드에 해당되는 경우
      answer += "R";
      current["right"] = numbers[i];
    } else {
      // 누를 번호가 가운데 키패드에 해당되는 경우
      const tempObj = { ...current };

      for (let hand in tempObj) {
        // Math.abs => 정수
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        let location = Math.abs(numbers[i] - tempObj[hand]);

        if (location >= 3) {
          // Math.trunc() : 소수점 제거
          location = Math.trunc(location / 3) + (location % 3);
        }
        tempObj[hand] = location;
      }

      if (tempObj["left"] === tempObj["right"]) {
        //각 엄지손가락 위치가 동일한 경우 주로 사용하는 손가락으로 누른다.
        answer += hand === "left" ? "L" : "R";
        current[hand] = numbers[i];
      } else {
        if (tempObj["left"] > tempObj["right"]) {
          answer += "R";
          current["right"] = numbers[i];
        } else {
          answer += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }
  return answer;
}

//reduce
const [leftNumbers, rightNumbers] = [
  // 비구조화할당
  [1, 4, 7],
  [3, 6, 9],
];

function solution(numbers, hand) {
  let answer = "";

  //현재 손가락의 위치를 저장
  const current = {
    left: 10,
    right: 12,
  };

  return numbers.reduce((acc, cur) => {
    let [useFinger, target, number] = ["", "", 0]; //비구조화할당

    if (leftNumbers.includes(cur)) {
      [useFinger, target, number] = ["L", "left", cur];
    } else if (rightNumbers.includes(cur)) {
      [useFinger, target, number] = ["R", "right", cur];
    } else {
      const fingers = Object.entries(current).reduce((acc2, cur2) => {
        const targetHand = cur2[0];

        cur = cur === 0 ? 11 : cur;
        let location = Math.abs(cur - cur2[1]);

        if (location > 2) {
          location = Math.trunc(location / 3) + (location % 3);
        }

        acc2[targetHand] = location;
        return acc2;
      }, {});

      if (fingers["left"] === fingers["right"]) {
        [useFinger, target, number] = [
          hand === "right" ? "R" : "L",
          hand === "right" ? hand : "left",
          cur,
        ];
      } else if (fingers["left"] > fingers["right"]) {
        [useFinger, target, number] = ["R", "right", cur];
      } else {
        [useFinger, target, number] = ["L", "left", cur];
      }
    }

    current[target] = number;
    return acc + useFinger;
  }, "");
}
