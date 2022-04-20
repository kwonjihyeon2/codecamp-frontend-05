import { ChangeEvent } from "react";
import * as J from "./joinStyle";

interface IPropsJoinUI {
  onClickJoin: () => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
  nameError: string;
  userError: string;
  passwordError: string;
  inputs: {};
}

export default function JoinPageUI(props: IPropsJoinUI) {
  return (
    <J.Wrapper>
      <J.WrapperBody>
        <J.WrapperContainer>
          <J.Title>회원가입</J.Title>
          <J.ChangeInput
            type="text"
            name="userID"
            placeholder="이메일을 입력해주세요."
            onChange={props.onChangeInputs}
          />
          <J.ErrorColor>{props.userError}</J.ErrorColor>
          <J.ChangeInput
            type="password"
            name="userPassword"
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
            onChange={props.onChangeInputs}
          />
          <J.ErrorColor>{props.passwordError}</J.ErrorColor>
          <J.ChangeInput
            type="text"
            name="userName"
            placeholder="이름을 입력해주세요"
            onChange={props.onChangeInputs}
          />
          <J.ErrorColor>{props.nameError}</J.ErrorColor>
          <J.LoginBtn isActive={props.isActive} onClick={props.onClickJoin}>
            회원가입
          </J.LoginBtn>

          <J.UlButton>
            <J.LiInput>
              <input type="checkbox" /> [필수] 만 14세 이상이며 약관에
              동의합니다.
            </J.LiInput>
            <J.LiInput>
              <input type="checkbox" /> [선택] 광고성 정보 수신에 동의합니다.
            </J.LiInput>
          </J.UlButton>
          <J.ButtonLink>
            <J.IconImg src="/icon/google-icon.png" />
            구글로 회원가입
          </J.ButtonLink>
        </J.WrapperContainer>
      </J.WrapperBody>
    </J.Wrapper>
  );
}
