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
import { LOGIN_USER } from "./Login.queries";

export default function LoginContainer() {
  const [inputs, setInputs] = useState({
    userID: "",
    userPassword: "",
  });
  //   const [userID, setUserID] = useState("");
  //   const [userPassword, setUserPassword] = useState("");
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

  const onClickLogin = async () => {
    try {
      const result = await userlogin({
        variables: {
          email: inputs.userID,
          password: inputs.userPassword,
        },
      });
      if (setAccessToken)
        setAccessToken(result.data?.loginUser.accessToken || "");
      console.log(result.data?.loginUser.accessToken);
      router.push("/mainpage");
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <LoginPageUI
      onChangeInputs={onChangeInputs}
      userError={userError}
      passwordError={passwordError}
      isActive={isActive}
      onClickLogin={onClickLogin}
    />
  );
}
