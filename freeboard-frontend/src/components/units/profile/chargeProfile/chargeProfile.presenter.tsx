import styled from "@emotion/styled";

interface IMountColor {
  changeMount: number;
}

const ButtonColor = styled.button`
  border: 1px solid
    ${(props: IMountColor) =>
      props.changeMount === props.amount ? "blue" : "none"};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WrapperBody = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 50px 0;
`;

const MypageBox = styled.div`
  width: 100%;
  padding: 50px 0;
`;

export default function ChargePageUI(props) {
  return (
    <Wrapper>
      <WrapperBody>
        <MypageBox>
          <div>
            <p>{props.data?.fetchUserLoggedIn.name}</p>
            포인트 : {props.data?.fetchUserLoggedIn.userPoint?.amount}
          </div>
          <button onClick={props.onClickPayment}>충전하기</button>

          <ButtonColor
            changeMount={props.changeMount}
            onClick={props.onClickAmount(100)}
          >
            100
          </ButtonColor>
          <ButtonColor
            changeMount={props.changeMount}
            onClick={props.onClickAmount(20000)}
          >
            20000
          </ButtonColor>
          <ButtonColor
            changeMount={props.changeMount}
            onClick={props.onClickAmount(30000)}
          >
            30000
          </ButtonColor>
          <ButtonColor
            changeMount={props.changeMount}
            onClick={props.onClickAmount(40000)}
          >
            40000
          </ButtonColor>
          <ButtonColor
            changeMount={props.changeMount}
            onClick={props.onClickAmount(50000)}
          >
            50000
          </ButtonColor>
        </MypageBox>
      </WrapperBody>
    </Wrapper>
  );
}
