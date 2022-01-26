// import "../styles/globals.css"; 나중에 삭제할..
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import LayoutSample from "../src/commons/layoutSample";
import { Global } from "@emotion/react";
import { globalSampleStyle } from "../src/commons/styles/globalSampleStyle";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
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
