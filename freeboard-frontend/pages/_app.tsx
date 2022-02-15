import "../styles/globals.css"; // 나중에 삭제할..
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import LayOutDesign from "../src/components/commons-components/Layout";
import { Global } from "@emotion/react";
import { globalStyle } from "../src/commons/styles/LayOutDesignStyles";
import { useState, createContext, Dispatch, SetStateAction } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX4TE4xP6jaGfW18fFeUFmeiJ4ifPeXyY",
  authDomain: "forfreeboard.firebaseapp.com",
  projectId: "forfreeboard",
  storageBucket: "forfreeboard.appspot.com",
  messagingSenderId: "1032669085239",
  appId: "1:1032669085239:web:a2db23a257ef37c19649b2",
};

// Initialize Firebase
export const forfreeboard = initializeApp(firebaseConfig);

interface IpropsContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const MakeGlobalContext = createContext<IpropsContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
  };
  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(), // uri에서 받아온 데이터를 임시저장하는 공간
  });

  return (
    <MakeGlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyle} />
        <LayOutDesign>
          <Component {...pageProps} />
        </LayOutDesign>
      </ApolloProvider>
    </MakeGlobalContext.Provider>
  );
}

export default MyApp;
