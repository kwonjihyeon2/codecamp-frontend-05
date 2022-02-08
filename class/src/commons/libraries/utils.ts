export const checkFileValidation = (file: File | undefined) => {
  if (!file?.size) {
    alert("파일이 존재하지 않습니다.");
    return false; // if,else형식으로 코드가 중첩되지않게 early exit(틀린걸 먼저 제외) 패턴
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한 : 5MB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg / png 파일 형식만 업로드 가능합니다.");
    return false;
  }

  return true;
  //file 형식에 옵셔널체이닝하거나 타입 자체에 or 넣거나
  //index에 함수를 종료시켜줘야하니까 boolean으로 결과 보내기
};
