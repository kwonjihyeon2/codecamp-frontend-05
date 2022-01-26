import "../styles/globals.css"; // 나중에 삭제할..
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import LayOutDesign from "../src/commons/Layout";
import { Global } from "@emotion/react";
import { globalStyle } from "../src/commons/styles/LayOutDesignStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // uri에서 받아온 데이터를 임시저장하는 공간
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyle} />
      <LayOutDesign>
        <Component {...pageProps} />
      </LayOutDesign>
    </ApolloProvider>
  );
}

export default MyApp;
