import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useContext } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LoginPageUI from "./Login.presenter";
import {
  LOGIN_USER,
  // FETCH_USER_LOGGED_IN,
} from "./Login.queries";

export default function LoginContainer() {
  const [inputs, setInputs] = useState({
    userID: "",
    userPassword: "",
  });
  const [isActive, setIsActive] = useState(false);

  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validation = /^\w+@\w+\.\w{2,3}$/;
  const PasswordVali =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });

    if (validation.test(inputs.userID) === false) {
      setUserError("이메일을 정확히 입력해주세요.");
    } else {
      setUserError("");
    }
    if (!PasswordVali.test(event.target.value)) {
      setPasswordError(
        "8-16자 사이 영문, 숫자, 특수문자를 조합해서 입력해주세요."
      );
      console.log(isActive);
    } else {
      setPasswordError("");
    }
    if (
      validation.test(inputs.userID) &&
      PasswordVali.test(event.target.value)
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const [userlogin] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { setAccessToken } = useContext(MakeGlobalContext);
  const router = useRouter();
  // const client = useApolloClient();

  const onClickLogin = async () => {
    try {
      const result = await userlogin({
        variables: {
          email: inputs.userID,
          password: inputs.userPassword,
        },
      });

      const saveToken = result.data?.loginUser.accessToken;

      // const resultUserInfo = await client.query({
      //   query: FETCH_USER_LOGGED_IN,
      //   context: {
      //     headers: { Authorization: `Bearer ${saveToken}` },
      //   },
      // });

      // const userInfo = resultUserInfo.data.fetchUserLoggedIn;

      if (setAccessToken) setAccessToken(saveToken || "");
      // if (setUserInfo) setUserInfo(userInfo);

      // localStorage.setItem("saveToken", saveToken || "");
      // localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // console.log(localStorage.setItem("loginkey", "aaa"));
      router.push("/mainpage");
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickJoin = () => {
    router.push("/Login/join");
  };

  return (
    <LoginPageUI
      onClickJoin={onClickJoin}
      onChangeInputs={onChangeInputs}
      userError={userError}
      passwordError={passwordError}
      isActive={isActive}
      onClickLogin={onClickLogin}
    />
  );
}
