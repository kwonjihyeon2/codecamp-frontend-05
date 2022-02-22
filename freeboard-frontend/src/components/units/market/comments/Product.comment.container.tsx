import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import ProductCommentItem from "../EditComments/ProductEditComment";
import { v4 as uuidv4 } from "uuid";
import {
  CREATE_PRODUCT_COMMENT,
  FETCH_ITEM_COMMENT,
  DELETE_COMMENT,
} from "./product.comment.queries";
import CommentAnswerItem from "../commentsAnswer/commentsAnswer.container";
import { useState } from "react";

export default function ProductComment() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [createComment] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_PRODUCT_COMMENT);
  const { data } = useQuery(FETCH_ITEM_COMMENT, {
    variables: { page: 1, useditemId: String(router.query.ItemId) },
  });

  // console.log(data?.fetchUseditemQuestions);
  const [deleteComment] = useMutation(DELETE_COMMENT);

  const onClickSubmit = async (data) => {
    await createComment({
      variables: {
        createUseditemQuestionInput: { contents: data.contents },
        useditemId: String(router.query.ItemId),
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev) => {
              return [data?.createUseditemQuestion, ...prev];
            },
          },
        });
      },
    });
    // console.log(data);
  };

  const onClickDelete = (useditemQuestionId: string) => async () => {
    await deleteComment({
      variables: { useditemQuestionId: useditemQuestionId },
      update(cache, { data }) {
        // console.log(data);
        const deletedId = data.deleteUseditemQuestion;

        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev, { readField }) => {
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

  const [isOpen, setIsOpen] = useState("");

  const onClickOpen = (el) => () => {
    setIsOpen(el);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <input type="text" {...register("contents")} />

        <button>등록</button>
      </form>
      <div>
        {data?.fetchUseditemQuestions.map((el) => (
          <div key={uuidv4()}>
            <ProductCommentItem
              el={el}
              data={data}
              onClickDelete={onClickDelete}
            />
            <button onClick={onClickOpen(el._id)}>댓글 보기</button>
            <CommentAnswerItem el={el} isOpen={isOpen} />
          </div>
        ))}
      </div>
    </div>
  );
}
