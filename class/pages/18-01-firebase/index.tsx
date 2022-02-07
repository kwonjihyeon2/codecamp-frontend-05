import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    //firebase에 데이터 등록
    const board = collection(getFirestore(firebaseApp), "board"); // 접속정보, 컬렉션(table) 이름
    await addDoc(board, {
      writer: "철수",
      title: "등록연습",
      contents: "연습입니다",
    });
  };

  const onClickFetch = async () => {
    //firebase에서 데이터 꺼내오기
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());

    console.log(docs);
  };
  return (
    <div>
      <h1>파이어베이스 연습 페이지입니다.</h1>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </div>
  );
}
