import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchboards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      writer
    }
  }
`;

interface IProps {
  isMatched: boolean;
}

const MatchingWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchSamplePage() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: fetchBoard } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.fetch) },
  });

  const [search, setSearch] = useState("");

  const LodashDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setSearch(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    LodashDebounce(event.target.value);
  };

  const onClickSearch = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(`/quiz/week04-day04/${event.currentTarget.id}`);
    console.log(fetchBoard?.fetchBoard._id);
  };

  const onChangePage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ search, page: Number(event.target.id) });
  };

  return (
    <div>
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={uuidv4()}>
          <span>{el.writer}</span>
          <span onClick={onClickSearch} id={el._id}>
            {" "}
            {el.title
              .replaceAll(search, `#$%^${search}#$%^`)
              .split("#$%^")
              .map((el) => (
                <MatchingWord
                  key={uuidv4()}
                  isMatched={el === search ? true : false}
                >
                  {el}
                </MatchingWord>
              ))}{" "}
          </span>
        </div>
      ))}
      {new Array(10).fill(1).map((el, index) => (
        <span key={uuidv4()} id={`${index + 1}`} onClick={onChangePage}>
          {" "}
          {`${index + 1}`}{" "}
        </span>
      ))}
    </div>
  );
}
