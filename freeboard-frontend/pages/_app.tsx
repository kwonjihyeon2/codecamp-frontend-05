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
import {
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { onError } from "@apollo/client/link/error";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

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

interface IUserInfo {
  name?: string;
  email?: string;
  _id?: string;
}

interface IpropsContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
  search?: string;
  setSearch?: Dispatch<SetStateAction<string>>;
}

export const MakeGlobalContext = createContext<IpropsContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const [search, setSearch] = useState("");
  // const [isLoading, setIsLoading] = useState(true)

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo,
    setUserInfo,
    search,
    setSearch,
  };

  useEffect(() => {
    // if (localStorage.getItem("saveToken")) {
    //   setAccessToken(localStorage.getItem("saveToken") || "");
    // }
    // if (localStorage.getItem("userInfo")) {
    //   setUserInfo(JSON.parse(localStorage.getItem("userInfo") || ""));
    // }
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_APOLLO_URI}`,
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
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
