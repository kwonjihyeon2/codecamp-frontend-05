// import "../styles/globals.css"; 나중에 삭제할..
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import LayoutSample from "../src/commons/layoutSample";
import { Global } from "@emotion/react";
import { globalSampleStyle } from "../src/commons/styles/globalSampleStyle";
import {
  useEffect,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Head from "next/head";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
}
interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>; //state사용 시 만들어주는 타입
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  //여기 state로 불러오는 값 : localStorage에 저장된 토큰
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const value = {
    //추후 로그인 정보 등 증가할 데이터 객체로 담은 것
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo,
    setUserInfo,
  };

  useEffect(() => {
    //jsx까지 그려진 후 실행되는 부분이기 때문에 useEffect로도 사용 가능
    //새로고침했을 때 초기화 방지
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 로그인 시 받아온 토큰 자리(graph-ql)
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(), //uri에서 받아온 데이터를 임시저장하는 공간(내컴퓨터 메모리공간)
  });

  return (
    <>
      {/* 모든페이지에 카카오맵 다운로드 -> 비효율적
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7c386a558be041dd6a3536203ece273f"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={value}>
        <ApolloProvider client={client}>
          <Global styles={globalSampleStyle} />
          <LayoutSample>
            <Component {...pageProps} />
          </LayoutSample>

          {/* component가 각각의 껍데기 layout으로 묶어주고 각 인덱스로,, */}
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;

//global ref
// import { globalStyle } from "../src/commons/styles/LayOutDesignStyles";

// function MyApp({ Component, pageProps }: AppProps) {
//   const client = new ApolloClient({
//     uri: "http://backend05.codebootcamp.co.kr/graphql",
//     cache: new InMemoryCache(), // uri에서 받아온 데이터를 임시저장하는 공간
//   });

//   return (
//     <ApolloProvider client={client}>
//       <Global styles={globalStyle} />
//       <LayOutDesign>
//         <Component {...pageProps} />
//       </LayOutDesign>
//     </ApolloProvider>
//   );
// }
