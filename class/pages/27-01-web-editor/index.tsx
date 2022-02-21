// import ReactQuill from "react-quill"; 다이나믹 임폴드 이용해야(next기능)
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  // 글자 화면에 어떻게 쓰이는 지 확인 가능
  //   if (process.browser) {
  //     console.log("나는 브라우저다 !!!");
  //   } else {
  //     console.log("나는 프론트엔드 서버다 !!");
  //   }

  return (
    <div>
      <div>
        작성자 : <input type="text" />
      </div>
      <div>
        비밀번호 : <input type="password" />
      </div>
      <div>
        제목 : <input type="text" />
      </div>
      내용 : <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
