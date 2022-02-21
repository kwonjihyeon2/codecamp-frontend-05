import { useMutation, gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";

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

export default function ProductComment() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const [createComment] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_PRODUCT_COMMENT);
  const { data, refetch } = useQuery(FETCH_ITEM_COMMENT, {
    variables: { page: 1, useditemId: String(router.query.ItemId) },
  });

  console.log(data?.fetchUseditemQuestions.contents);

  const onClickSubmit = async (data) => {
    try {
      const result = await createComment({
        variables: {
          createUseditemQuestionInput: { contents: data.contents },
          useditemId: String(router.query.ItemId),
        },
        refetchQueries: [
          {
            variables: { page: 1, useditemId: router.query.ItemId },
            query: FETCH_ITEM_COMMENT,
          },
        ],
      });
      console.log(result.data?.createUseditemQuestion.contents);
    } catch (error) {
      console.log(error.message);
    }
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
          </div>
        ))}
      </div>
    </div>
  );
}
