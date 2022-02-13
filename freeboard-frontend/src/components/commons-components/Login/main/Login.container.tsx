import { ChangeEvent, useState } from "react";
import LoginPageUI from "./Login.presenter";

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

  return (
    <LoginPageUI
      onChangeInputs={onChangeInputs}
      userError={userError}
      passwordError={passwordError}
      isActive={isActive}
    />
  );
}
