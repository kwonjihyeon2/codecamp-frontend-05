import { useMutation, useQuery } from "@apollo/client";
import { FieldValues, useForm, UseFormHandleSubmit } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import ProductClickButton from "../../../commons-components/button/market04";
import CommentInput from "../../../commons-components/input/marketComment";
import { IComment } from "../comments/Product.comment.types";
import EditCommentAnswerItem from "../EditcommentAnswer/EditCommentAnswer.container";
import {
  CREATE_COMMENT_ANSWER,
  FETCH_COMMENT_ANSWER,
  DELETE_COMMENT_ANSWER,
} from "./commentsAnswer.queries";
import { ICommentAnswer } from "./commentsAnswer.types";

export default function CommentAnswerItem(props: ICommentAnswer) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_COMMENT_ANSWER, {
    variables: {
      page: 1,
      useditemQuestionId: String(props.isOpenComment),
    },
  });
  console.log(data);

  const [createCommentAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_COMMENT_ANSWER);

  const [deleteCommentAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_COMMENT_ANSWER);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickCreateAnswer = async (data) => {
    // console.log(data);
    try {
      await createCommentAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionId: String(props.isOpenComment),
        },
        refetchQueries: [
          {
            variables: {
              page: 1,
              useditemQuestionId: String(props.isOpenComment),
            },
            query: FETCH_COMMENT_ANSWER,
          },
        ],
        // update(cache, { data }) {
        //   cache.readQuery({
        //     query: FETCH_COMMENT_ANSWER,
        //     variables: {
        //       page: 1,
        //       useditemQuestionId: String(props.isOpenComment),
        //     },
        //   });
        // },
        // update(cache, { data }) {
        //   cache.modify({
        //     fields: {
        //       fetchUseditemQuestionAnswers: (prev) => {
        //         return [data?.createUseditemQuestionAnswer, ...prev];
        //       },
        //     },
        //   });
        // },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log(data?.fetchUseditemQuestionAnswers);
  const onClickDeleteAnswer =
    (useditemQuestionAnswerId: string) => async () => {
      try {
        await deleteCommentAnswer({
          variables: {
            useditemQuestionAnswerId: useditemQuestionAnswerId,
          },
          update(cache, { data }) {
            const deletedId = data?.deleteUseditemQuestionAnswer;
            cache.modify({
              fields: {
                fetchUseditemQuestionAnswers: (prev, { readField }) => {
                  const filteredPrev = prev.filter(
                    (el) => readField("_id", el) !== deletedId
                  );
                  return [...filteredPrev];
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
      {props.isOpenComment === props.el._id ? (
        <div>
          <form onSubmit={handleSubmit(onClickCreateAnswer)}>
            <CommentInput type="text" register={register("contents")} />
            <ProductClickButton name="등록하기" />
          </form>
          <div>
            {data?.fetchUseditemQuestionAnswers.map((el) => (
              <div key={el._id}>
                <EditCommentAnswerItem
                  isOpenComment={props.isOpenComment}
                  el={el}
                  data={data}
                  onClickDeleteAnswer={onClickDeleteAnswer}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
