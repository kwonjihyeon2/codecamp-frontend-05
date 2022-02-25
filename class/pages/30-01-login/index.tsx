import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, ChangeEvent, useState } from "react";
import {
  IMutation,
  // IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
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
  const [loginUserExample] = useMutation<
    //partial : 모든 데이터를 ?붙여서 가져옴 => 유틸리티 타입
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
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
      const result = await loginUserExample({
        variables: {
          email: email,
          password: password,
        },
      });

      const accessToken = result.data?.loginUserExample.accessToken;
      //글로벌 스테이트에 저장
      if (setAccessToken) setAccessToken(accessToken || "");

      router.push("/30-02-login-success");
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
