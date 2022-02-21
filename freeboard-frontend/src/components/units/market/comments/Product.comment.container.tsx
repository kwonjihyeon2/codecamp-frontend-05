import { useMutation, gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const CREATE_PRODUCT_COMMENT = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      createdAt
    }
  }
`;

const FETCH_ITEM_COMMENT = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
    }
  }
`;

const DELETE_COMMENT = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export default function ProductComment() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const [createComment] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_PRODUCT_COMMENT);
  const { data } = useQuery(FETCH_ITEM_COMMENT, {
    variables: { page: 1, useditemId: String(router.query.ItemId) },
  });

  console.log(data?.fetchUseditemQuestions);
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

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <input type="text" {...register("contents")} />

        <button>등록</button>
      </form>
      <div>
        {data?.fetchUseditemQuestions.map((el) => (
          <div key={uuidv4()}>
            <span>{el.contents}</span>
            <span>
              <BiEditAlt />
            </span>
            <span onClick={onClickDelete(el._id)}>
              <AiFillDelete />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
