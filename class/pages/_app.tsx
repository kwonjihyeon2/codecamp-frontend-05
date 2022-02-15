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
import { useState, createContext, SetStateAction, Dispatch } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>; //state사용 시 만들어주는 타입
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const value = {
    //추후 로그인 정보 등 증가할 데이터 객체로 담은 것
    accessToken: accessToken,
    setAccessToken: setAccessToken,
  };

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 로그인 시 받아온 토큰 자리(graph-ql)
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(), //uri에서 받아온 데이터를 임시저장하는 공간(내컴퓨터 메모리공간)
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalSampleStyle} />
        <LayoutSample>
          <Component {...pageProps} />
        </LayoutSample>

        {/* component가 각각의 껍데기 layout으로 묶어주고 각 인덱스로,, */}
      </ApolloProvider>
    </GlobalContext.Provider>
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
