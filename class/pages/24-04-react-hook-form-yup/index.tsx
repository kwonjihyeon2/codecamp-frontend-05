// import { useState } from "react";

import { useForm } from "react-hook-form";

interface FormValues {
  myWriter?: string;
  myTitle?: string;
  myContents?: string;
}

export default function ReactHookFormPage() {
  //   const [writer, setWriter] = useState("");

  //   const onChangeWriter = (event) => {
  //     console.log(event.target.value);
  //     setWriter(event.target.value);
  //   };

  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("myWriter")} />
      제목 : <input type="text" {...register("myTitle")} />
      내용 : <input type="text" {...register("myContents")} />
      <button>등록하기</button>
    </form>
  );
}
