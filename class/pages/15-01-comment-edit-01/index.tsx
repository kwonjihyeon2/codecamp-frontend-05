import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      _id
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  // const [isEdit, setIsEdit] = useState(false);
  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const onClickIsEdit = (event: MouseEvent<HTMLElement>) => {
    console.log(event.target.id);
    const indexNumber = isEdits;
    // 배열을 복사했지만 원본을 그냥 복사한 것이기때문에 복사한 값을 바꿔주더라도 원본으로 인식함
    indexNumber[Number(event.target.id)] = true;
    console.log(indexNumber);
    setIsEdits([...indexNumber]);
    // setIsEdits(true);
  };

  return (
    <div>
      <h1>댓글수정 연습</h1>
      {data?.fetchBoards?.map((el: any, index: any) => (
        <div key={el._id}>
          {isEdits[index] === false && (
            <div>
              <span>
                {el.title} {el.writer}
              </span>
              <button id={index} onClick={onClickIsEdit}>
                수정하기
              </button>
            </div>
          )}
          {isEdits[index] === true && (
            <div>
              <div>======</div>
              <div>이것은 수정하기 화면입니다.</div>
              <div>======</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
