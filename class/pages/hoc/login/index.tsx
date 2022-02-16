import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, ChangeEvent, useState } from "react";
import { GlobalContext } from "../../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function HocPage() {
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(event.target.value);
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

      router.push("/hoc/main"); //로그인성공페이지로 이동
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickButton = (el: number) => (event) => {
    console.log(el);
  };

  return (
    <div>
      아이디 : <input type="text" onChange={onChangeEmail} /> 비밀번호 :{" "}
      <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
      <button onClick={onClickButton(123)}>임의의 버튼</button>
    </div>
  );
}
