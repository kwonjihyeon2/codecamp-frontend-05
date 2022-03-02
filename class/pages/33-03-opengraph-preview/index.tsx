import axios from "axios";
import { useEffect } from "react";

export default function OpenGraphPreviewPage() {
  //og를 읽을 수 있도록 개발하는 페이지

  useEffect(() => {
    const getOpengraph = async () => {
      //string형태로 해당 주소의 html파일을 받아옴(스크래핑)
      // -> CORS로 브라우저에서는 차단당할 수 있기 때문에 벡엔드에서 보통 처리함
      const result = await axios.get("https://www.gmarket.co.kr/");
      //   console.log(result.data);
      //   console.log(result.data.split("<meta "));

      //   console.log(
      //     result.data.split("<meta ").filter((el) => el.includes("og:"))
      //   );
      const openGraph = result.data
        .split("<meta ")
        .filter((el) => el.includes("og:url"))[0]
        .split(" ");
      console.log(
        openGraph[1].replaceAll('content="', "").replaceAll('"/>', "")
      );
    };
    getOpengraph();
  }, []);

  return <div></div>;
}
