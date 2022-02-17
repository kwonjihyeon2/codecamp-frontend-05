import { ChangeEvent, useState } from "react";
import JoinPageUI from "./join.presenter";
import { CREATE_USER } from "./join.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

export default function JoinPageContainer() {
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
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  const NameVali = /^[가-힣]+$/;

  const onChangeInputs =
    (el: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs({
        ...inputs,
        [el]: event.target.value,
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
        PasswordVali.test(event.target.value) &&
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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <JoinPageUI
      onClickJoin={onClickJoin}
      onChangeInputs={onChangeInputs}
      isActive={isActive}
      nameError={nameError}
      userError={userError}
      passwordError={passwordError}
    />
  );
}
