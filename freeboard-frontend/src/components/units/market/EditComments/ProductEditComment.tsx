import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { UPDATE_COMMENT } from "./productEditComment.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProductCommentItem(props) {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [isEdit, setIsEdit] = useState(false);

  const onChangeEdit = (useditemQuestionId: string) => () => {
    console.log(useditemQuestionId);
    setIsEdit((prev) => !prev);
  };

  const onClickUpdate = (useditemQuestionId: string) => async (data) => {
    console.log(data);
    try {
      const result = await updateComment({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: useditemQuestionId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.updateUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      console.log(result);
      setIsEdit((prev) => !prev);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isEdit ? (
        <div>
          <form onSubmit={handleSubmit(onClickUpdate(props.el._id))}>
            <input
              type="text"
              {...register("contents")}
              defaultValue={props.el.contents}
            />

            <button>수정</button>
          </form>
        </div>
      ) : (
        <>
          <div>
            <span>{props.el.user.name}</span>
            <span>{props.el.contents}</span>
            <span onClick={onChangeEdit(props.el._id)}>
              <BiEditAlt />
            </span>
            <span onClick={props.onClickDelete(props.el._id)}>
              <AiFillDelete />
            </span>
          </div>
        </>
      )}
    </>
  );
}
