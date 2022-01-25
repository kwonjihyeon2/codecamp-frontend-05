import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import FreeBoardCommentsUI from "./BoardComment.presenter";
import {
  FETCH_BOARD_COMMENT,
  CREATE_BOARD_COMMENT,
} from "./BoardComment.queries";
// import { IBoardCommentProps } from "./BoardComment.types"
import { Modal } from "antd";

export default function FreeBoardComments() {
  const router = useRouter();

  const [CreateComment] = useMutation(CREATE_BOARD_COMMENT);
  const [myWriter, setMywriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContents, setMyContents] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [length, setLength] = useState(0);

  const { data } = useQuery(FETCH_BOARD_COMMENT, {
    variables: { page: 1, boardId: String(router.query.board_Id) },
  });

  // console.log(data?.fetchBoardComments.writer)

  const onChangeMywriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMywriter(event.target.value);
    if (event.target.value) {
      setIsActive(true);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
    const myPw = event.target.value;

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

  // ant-design에서 만든 onchange이기 때문에 type:event x

  const CreateCommentBtn = async () => {
    try {
      await CreateComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
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
      onChangeMywriter={onChangeMywriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      isActive={isActive}
      CreateComment={CreateCommentBtn}
      length={length}
      handelChange={handelChange}
      StarValue={StarValue}
    />
  );
}
