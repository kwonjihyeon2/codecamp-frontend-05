import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickDelete = (boardId: string) => async () => {
    //삭제 기능
    await deleteBoard({
      variables: { boardId: boardId },
      update(cache, { data }) {
        // (기존에들어가있던 데이터 - setstate(prev) , 새로운 데이터)
        const deletedId = data.deleteBoard;

        cache.modify({
          // 댓글 수정과 같은 부분에서 추천하는 방식
          fields: {
            fetchBoards: (prev, { readField }) => {
              //prev(기존 데이터)에서 삭제할 데이터 빼야함 -> filter로 삭제된 데이터 아이디와 동일한 데이터를 걸러
              //prev가 직접 데이터를 가지고있는 게 아님 => prev.id X => 각 데이터의 아이디를 얻기 위한 {readField}힘수 이용
              // el : 각각의 ID
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록 기능
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목",
          contents: "내용",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; //[{writer : "영희", password : '1234' ... }]
            },
          },
        });
      },
    });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
