import UserInfoInput from "../../../commons-components/input/userInfo";
import UploadProfile from "../../../commons-components/Upload/editUser";
import * as C from "./chargeProfile.style";
import { IPropsCharge } from "./chargeProfile.types";

export default function ChargePageUI(props: IPropsCharge) {
  const moneyArr = [
    {
      content: 100,
    },
    {
      content: 1000,
    },
    {
      content: 10000,
    },
    {
      content: 30000,
    },
    {
      content: 50000,
    },
  ];

  return (
    <C.Wrapper>
      <C.WrapperBody>
        <C.MypageBox>
          <C.SettingTxt>회원정보</C.SettingTxt>
          <div>
            <C.UserName>
              <span>이메일</span>
              <div style={{ width: "85%" }}>
                <UserInfoInput
                  defaultValue={props.data?.fetchUserLoggedIn.email}
                  readOnly={true}
                />
                <C.MoneyTxt>
                  이메일을 변경하시려면 운영자에게 메일을 보내주세요
                </C.MoneyTxt>
              </div>
            </C.UserName>
            <C.UserName>
              <span>닉네임</span>
              <UserInfoInput
                defaultValue={props.data?.fetchUserLoggedIn.name}
                readOnly={!props.data?.fetchUserLoggedIn.name}
                onChange={props.onChangeName}
              />
            </C.UserName>
            <UploadProfile
              picture={props.picture}
              onChangefile={props.onChangefile}
            />
            <C.UserName>
              <span>포인트</span>
              <UserInfoInput
                defaultValue={props.data?.fetchUserLoggedIn.userPoint?.amount}
                readOnly={true}
              />
              <C.ChargeBtn onClick={props.onClickPayment}>충전하기</C.ChargeBtn>
            </C.UserName>
            <C.UserName>
              <span>충전 금액</span>
              <div>
                {moneyArr.map((el) => (
                  <C.ButtonColor
                    key={el.content}
                    className={props.amount === el.content ? "btn" : ""}
                    onClick={props.onClickAmount(el.content)}
                  >
                    {el.content}
                  </C.ButtonColor>
                ))}
                <C.MoneyTxt>
                  원하는 충전 금액을 클릭하고 충전하기 버튼을 클릭해주세요.
                </C.MoneyTxt>
              </div>
            </C.UserName>
          </div>

          <C.SubmitInfo onClick={props.onClickEdit}>회원정보 수정</C.SubmitInfo>
        </C.MypageBox>
      </C.WrapperBody>
    </C.Wrapper>
  );
}
