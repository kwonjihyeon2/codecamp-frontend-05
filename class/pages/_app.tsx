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

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(), //uri에서 받아온 데이터를 임시저장하는 공간
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalSampleStyle} />
      <LayoutSample>
        <Component {...pageProps} />
      </LayoutSample>

      {/* component가 각각의 껍데기 layout으로 묶어주고 각 인덱스로,, */}
    </ApolloProvider>
  );
}

export default MyApp;
