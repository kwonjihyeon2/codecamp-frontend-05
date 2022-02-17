import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import InputEx from "../../../src/components/commons-components/inputs/ex";
import { useForm } from "react-hook-form";

const ListBox = styled.div`
  width: 1000px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const SpanStyle = styled.span`
  width: 20%;
`;

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function CacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    console.log(data);
    try {
      const result = await createBoard({
        variables: { createBoardInput: { ...data } },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                return [data.createBoard, ...prev];
              },
            },
          });
        },
      });

      console.log(result.data?.createBoard);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickDelete = (boardId: string) => async () => {
    try {
      //   console.log(event.target.id);
      await deleteBoard({
        variables: {
          boardId,
        },
        update(cache, { data }) {
          const deletedId = data.deleteBoard;

          cache.modify({
            fields: {
              fetchBoards: (prev, { readField }) => {
                const filterboard = prev.filter(
                  (el) => readField("_id", el) !== deletedId
                );
                return [...filterboard];
              },
            },
          });
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>게시판 목록 불러오기</div>
      {data?.fetchBoards.map((el, index) => (
        <ListBox key={el._id}>
          <SpanStyle>{index + 1}</SpanStyle>
          <SpanStyle>{el.title}</SpanStyle>
          <SpanStyle>{el.contents}</SpanStyle>
          <SpanStyle>{el.createdAt.slice(0, 10)}</SpanStyle>
          {/* <input type="password" /> */}
          <button onClick={onClickDelete(el._id)}>삭제</button>
        </ListBox>
      ))}
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div>게시판 등록하기</div>
        <div>
          작성자 : <InputEx type="text" register={register("writer")} />
        </div>
        <div>
          비밀번호 : <InputEx type="password" register={register("password")} />
        </div>
        <div>
          제목 : <InputEx type="text" register={register("title")} />
        </div>
        <div>
          내용 : <InputEx type="text" register={register("contents")} />
        </div>
        <button>등록</button>
      </form>
    </div>
  );
}
