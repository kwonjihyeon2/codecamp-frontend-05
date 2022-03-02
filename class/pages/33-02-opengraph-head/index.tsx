import Head from "next/head";

export default function OpenGraphHeadPage() {
  //미리보기에 넣을 텍스트,이미지 설정 페이지
  return (
    <div>
      <Head>
        <meta property="og:title" content="사이트 제목" />
        <meta property="og:description" content="환영합니다" />
      </Head>
      <div>오픈그래프 연습 페이지입니다.</div>
    </div>
  );
}
