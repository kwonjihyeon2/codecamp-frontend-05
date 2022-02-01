import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import FreeBoardCommentsUI from "./BoardComment.presenter";
import {
  FETCH_BOARD_COMMENT,
  CREATE_BOARD_COMMENT,
} from "./BoardComment.queries";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function FreeBoardComments() {
  const router = useRouter();

  const [CreateComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
  });
  const [myContents, setMyContents] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [length, setLength] = useState(0);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: { page: 1, boardId: String(router.query.board_Id) },
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    const myPw = inputs.password;
    if (inputs.writer) {
      setIsActive(true);
    }
    if (myPw.length > 4) {
      setIsActive(true);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMyContents(event.target.value);
    const maxLength = event.target.value.length;
    if (maxLength) {
      setIsActive(true);
    }
    setLength(maxLength);
    if (maxLength >= 100) {
      Modal.warning({
        title: "댓글 수 제한",
        content: "댓글은 100자까지 작성할 수 있습니다.",
      });
    }
  };

  const [StarValue, setStarValue] = useState(3);
  const handelChange = (value: any) => {
    setStarValue(value);
  };

  const CreateCommentBtn = async () => {
    try {
      await CreateComment({
        variables: {
          createBoardCommentInput: {
            ...inputs,
            contents: myContents,
            rating: StarValue,
          },
          boardId: String(router.query.board_Id),
        },
        refetchQueries: [
          {
            variables: { page: 1, boardId: router.query.board_Id },
            query: FETCH_BOARD_COMMENT,
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
    Modal.success({ content: "댓글이 등록되었습니다." });
  };

  return (
    <FreeBoardCommentsUI
      data={data}
      onChangeInputs={onChangeInputs}
      onChangeContents={onChangeContents}
      isActive={isActive}
      CreateComment={CreateCommentBtn}
      length={length}
      handelChange={handelChange}
      StarValue={StarValue}
    />
  );
}
