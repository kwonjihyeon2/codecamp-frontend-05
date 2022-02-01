import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0;
`;

const WrapperDiv = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const WrapperUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
`;

const NaviList = styled.li`
  margin-left: 10px;
`;

export default function LayOutDesignNavi() {
  return (
    <Wrapper>
      <WrapperDiv>
        <WrapperUl>
          <NaviList>로그인</NaviList>
          <NaviList>회원가입</NaviList>
          <NaviList>고객센터</NaviList>
        </WrapperUl>
      </WrapperDiv>
    </Wrapper>
  );
}
