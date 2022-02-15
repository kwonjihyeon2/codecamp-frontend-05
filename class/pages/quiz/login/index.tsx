import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { GlobalContext } from "../../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginSamplePage() {
  const router = useRouter();
  const { accessToken, setAccessToken } = useContext(GlobalContext);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChangeinputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      console.log(inputs.email, result.data?.loginUser);
      if (setAccessToken)
        setAccessToken(result.data?.loginUser.accessToken || "");
      router.push("/quiz/login/login-sucess");
    } catch (error) {
      if (!accessToken) return alert("먼저 로그인을 해주세요");
      alert(error.message);
    }
  };

  return (
    <div>
      아이디 : <input type="text" id="email" onChange={onChangeinputs} />
      비밀번호 : <input type="text" id="password" onChange={onChangeinputs} />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
