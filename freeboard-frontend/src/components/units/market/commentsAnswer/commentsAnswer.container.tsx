import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import EditCommentAnswerItem from "../EditcommentAnswer/EditCommentAnswer.container";
import {
  CREATE_COMMENT_ANSWER,
  FETCH_COMMENT_ANSWER,
  DELETE_COMMENT_ANSWER,
} from "./commentsAnswer.queries";

export default function CommentAnswerItem(props) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_COMMENT_ANSWER, {
    variables: {
      page: 1,
      useditemQuestionId: String(props.el._id),
    },
  });

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

  const QuestionId = String(props.el._id);

  const onClickCreateAnswer = async (data) => {
    try {
      await createCommentAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionId: String(props.el._id),
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data?.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      console.log(data?.fetchUseditemQuestionAnswers);
    } catch (error) {
      console.log(error.message);
    }
  };

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
            <input type="text" {...register("contents")} />
            <button>등록</button>
          </form>
          <div>
            {data?.fetchUseditemQuestionAnswers.map((el) => (
              <div key={el._id}>
                <EditCommentAnswerItem
                  QuestionId={QuestionId}
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
