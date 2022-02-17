import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ButtonEx from "../../../src/components/commons-components/buttons/ex";
import InputEx from "../../../src/components/commons-components/inputs/ex";

const schema = yup.object().shape({
  writer: yup
    .string()
    .required("이름은 필수 입력 항목입니다.")
    .max(5, "5자리 내로 입력하세요"),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 항목입니다.")
    .max(8, "비밀번호는 최대 8자리로 입력하세요"),
  title: yup.string().required("제목은 100자 이내로 작성해주세요").max(100),
  contents: yup.string().required("내용은 1000자 이내로 입력하세요."),
});

export default function RegisterPage() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <InputEx type="text" register={register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      비밀번호 : <InputEx type="password" register={register("password")} />
      <div>{formState.errors.password?.message}</div>
      제목 :<InputEx type="text" register={register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용 : <InputEx type="text" register={register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      <ButtonEx type="submit" name="등록" isValid={formState.isValid} />
    </form>
  );
}
