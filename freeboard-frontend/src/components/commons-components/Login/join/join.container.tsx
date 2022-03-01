import { ChangeEvent, useState } from "react";
import JoinPageUI from "./join.presenter";
import { CREATE_USER } from "./join.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function JoinPageContainer() {
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const [inputs, setInputs] = useState({
    userID: "",
    userPassword: "",
    userName: "",
  });
  const [isActive, setIsActive] = useState(false);

  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const validation = /^\w+@\w+\.\w{2,3}$/;
  const PasswordVali =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,16}$/;
  const NameVali = /^[가-힣]+$/;

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });

    if (validation.test(inputs.userID) === false) {
      setUserError("이메일을 정확히 입력해주세요.");
    } else {
      setUserError("");
    }
    console.log(PasswordVali.test(inputs.userPassword));
    if (!PasswordVali.test(inputs.userPassword)) {
      setPasswordError(
        "8-16자 사이 영문, 숫자, 특수문자를 조합해서 입력해주세요."
      );
    } else {
      setPasswordError("");
    }

    if (!NameVali.test(inputs.userName)) {
      setNameError("이름을 정확히 입력하세요.");
    } else {
      setNameError("");
    }

    if (
      validation.test(inputs.userID) &&
      PasswordVali.test(inputs.userPassword) &&
      NameVali.test(inputs.userName)
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  console.log(inputs);

  const onClickJoin = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: inputs.userID,
            password: inputs.userPassword,
            name: inputs.userName,
          },
        },
      });
      console.log(result.data?.createUser);
      Modal.success({
        content: "회원가입에 성공했습니다. 로그인 페이지로 이동합니다.",
      });
      router.push("/Login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <JoinPageUI
      inputs={inputs}
      onClickJoin={onClickJoin}
      onChangeInputs={onChangeInputs}
      isActive={isActive}
      nameError={nameError}
      userError={userError}
      passwordError={passwordError}
    />
  );
}
