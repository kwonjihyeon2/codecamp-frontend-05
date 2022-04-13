import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_PRODUCT_COMMENT,
  FETCH_ITEM_COMMENT,
  DELETE_COMMENT,
} from "./product.comment.queries";
import { useState } from "react";
import ProductCommentUI from "./Product.comment.presenter";
import { IComment } from "./Product.comment.types";

export default function ProductComment() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [createComment] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_PRODUCT_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_ITEM_COMMENT, {
    variables: { page: 1, useditemId: String(router.query.ItemId) },
  });

  // console.log(data?.fetchUseditemQuestions);
  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_COMMENT);

  const onClickSubmit = async (data: IComment) => {
    console.log(data);
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
        const deletedId = data?.deleteUseditemQuestion;

        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              console.log(filteredPrev, prev);
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const [isOpenComment, setIsOpenComment] = useState("");

  const onClickOpen = (el: string) => () => {
    setIsOpenComment(el);
    // console.log(el);
  };
  console.log(isOpenComment);

  return (
    <ProductCommentUI
      data={data}
      handleSubmit={handleSubmit}
      register={register}
      onClickSubmit={onClickSubmit}
      onClickOpen={onClickOpen}
      onClickDelete={onClickDelete}
      isOpenComment={isOpenComment}
    />
  );
}
