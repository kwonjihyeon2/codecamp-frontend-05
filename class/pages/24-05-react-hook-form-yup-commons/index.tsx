import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button01 from "../../src/components/commons-components/buttons/01";
import Input01 from "../../src/components/commons-components/inputs/01";

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

interface FormValues {
  myEmail?: string;
  myPassword?: string;
}

export default function ReactHookFormPage() {
  //   const [writer, setWriter] = useState("");

  //   const onChangeWriter = (event) => {
  //     console.log(event.target.value);
  //     setWriter(event.target.value);
  //   };

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* <input type="text" {...register("myEmail")} /> */}
      이메일 : <Input01 type="text" register={register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호 : <Input01 type="password" register={register("myPassword")} />
      {/* <input type="text" {...register("myPassword")} /> */}
      <div>{formState.errors.myPassword?.message}</div>
      <Button01 isValid={formState.isValid} name="로그인" />
    </form>
  );
}
