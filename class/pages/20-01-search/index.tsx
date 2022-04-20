import { useQuery, gql } from "@apollo/client";
import { MouseEvent, ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); //variables 참고

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value); //undefined로 타입 추론됨 state에 타입 지정해줘야함 -> ("") , <string | undefined>
  };

  const onClickSearch = () => {
    refetch({ search, page: 1 });
    //keyword 작성 state에 저장해서 작성되니는 부분 검색되게.. search : 변수search -> shorthandproperty
    //검색을 했을때 결과 1페이지부터 보여줘야하기때문에 페이지 지정 필요
    setKeyword(search);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ search: keyword, page: Number(event.target.id) });
    //search : 입력한 검색어의 특정 페이지
    //1차 검색 후 다른 키워드를 적고 페이지를 이동하면 다른 키워드로 검색이 됨 -> 방지하기위해 여기는 search 값을 -> keword State로 지정해줌
    //event.target.id 타입 모를때 -> element 안에 있다는 조건을 걸어줌
  };

  return (
    <div>
      <h1>검색페이지</h1>
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span> {el.writer} </span>
          <span> {el.title} </span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {` ${index + 1} `}
        </span>
      ))}
    </div>
  );
}
