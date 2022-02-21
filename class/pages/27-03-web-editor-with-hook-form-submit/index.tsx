// import ReactQuill from "react-quill"; 다이나믹 임폴드 이용해야(next기능)
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface IFormValues {
  writer?: string;
  title?: string;
  password?: string;
  contents?: string;
}

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  //함수 안에서 배열(위치가 중요 이름은 상관없음)로 return하는 중 => 구조분해할당
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

  const onClickSubmit = async (data: IFormValues) => {
    //Object.key 키만 뽑아서 다시 배열로 만듬.every -> 모두 조건 충족하는지 확인

    if (!(data.writer && data.password && data.contents && data.title)) {
      Modal.warn({ content: "필수 입력 사항입니다!" });
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            title: data.title,
          },
        },
      });
      router.push(`/27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
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
    </form>
  );
}
