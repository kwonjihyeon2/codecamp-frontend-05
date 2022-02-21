// import ReactQuill from "react-quill"; 다이나믹 임폴드 이용해야(next기능)
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    console.log(value);

    // register로 등록하지않고 강제로 contents 키 / value 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // onChange 됐는지 안됐는지 react-hook-form 에 알려주는 기능 => trigger 이용해서 인식하게 만들어줘야
    trigger("contents");
  };

  return (
    <div>
      <div>
        작성자 : <input type="text" {...register("writer")} />
      </div>
      <div>
        비밀번호 : <input type="password" {...register("password")} />
      </div>
      <div>
        제목 : <input type="text" {...register("title")} />
      </div>
      내용 : <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
