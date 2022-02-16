import { useMutation, gql } from "@apollo/client";
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

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
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
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      if (setAccessToken) {
        setAccessToken(accessToken || ""); //로그인토큰 저장
        localStorage.setItem("accessToken", accessToken || "");
      }

      console.log("-----------------");
      console.log(localStorage.getItem("accessToken"));
      console.log("-----------------");

      router.push("/23-02-login-localstorage-success"); //로그인성공페이지로 이동
    } catch (error) {
      //typescript 오류 : error instanceof Error 조건으로 해결(버전차이)
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
