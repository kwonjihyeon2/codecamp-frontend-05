import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "../../src/components/units/board/write/BoardWrite.queries";

export default function BoardWrite() {
  //   const [myWriter, setMyWriter] = useState("");
  //   const [myTitle, setMyTitle] = useState("");
  //   const [myContents, setMyContents] = useState("");
  // 1. 동일한 타입을 가진 변수를 배열을 가진 변수로 묶음
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  const [qqq] = useMutation(CREATE_BOARD);

  const zzz = async () => {
    const result = await qqq({
      variables: { ...inputs },
    });
  };

  //   const onChangeMyWriter = (event) => {
  // setMyWriter(event.target.value);
  // setInputs({
  //   writer: inputs.writer,
  //   title: inputs.title,
  //   contents: inputs.contents,
  //     ...inputs,
  //     event.target.id: event.target.value,
  // });
  //event.target.id input에 제시된 id값이 event 함수로 들어오게됨
  //모든 이벤트핸들러 함수가 동일한 상황 -> 하나의 함수로 만들어주면됨
  //여기서 문제점 : event.target.id - 키값이라고 하면 참조해서 가져올때 객체는 .을 통해서 가져오느데(profile.name) 형식이 잘못됨
  //대괄호로 묶어줌 [event.target.id] - 배열형식 아님 주의!
  // 이렇게 함수를 통일해주면 댓글 수정 뮤테이션도 variables -> inputs 스프레드 연산자로 바꿔줄 수 있음.
  //   };

  const onChangeInputs = (event) => {
    // setMyContents(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.id,
    });
  };

  return (
    <div>
      <div>스프레드 연산자 연습!</div>
      <input type="text" id="writer" onChange={onChangeInputs} />
      <input type="text" id="title" onChange={onChangeInputs} />
      <input type="text" id="contents" onChange={onChangeInputs} />
    </div>
  );
}
