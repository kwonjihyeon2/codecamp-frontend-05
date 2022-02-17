import { useMutation, gql, useApolloClient } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const client = useApolloClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //input으로 묶기
  const [loginUser] = useMutation<
    //partial : 모든 데이터를 ?붙여서 가져옴 => 유틸리티 타입
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      //로그인 과정
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      //유저 정보 받아오기 - axios.get처럼 직접 데이터 받아서 사용해야
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });

      const userInfo = resultUserInfo.data.fetchUserLoggedIn;

      //글로벌 스테이트에 저장
      if (setAccessToken) setAccessToken(accessToken || "");
      if (setUserInfo) setUserInfo(userInfo);

      //로컬스토리지에 임시(refreshToken전) 저장 - 초기화 방자
      localStorage.setItem("accessToken", accessToken || "");
      localStorage.setItem("userInfo", JSON.stringify(userInfo)); //객체 그대로 넣을 수 없음 [object]로 나옴 -> 문자열로 변경

      //저장 결과 확인
      console.log("-----------------");
      console.log(JSON.parse(localStorage.getItem("userInfo") || "{}"));
      console.log(localStorage.getItem("accessToken"));
      console.log("-----------------");

      router.push("/24-02-login-use-apollo-client-success");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
