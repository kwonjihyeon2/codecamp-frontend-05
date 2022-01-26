import styled from "@emotion/styled/";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0;
`;
const HeaderList = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
`;
const NavList = styled.ul`
  display: flex;
  cursor: pointer;
`;

const NavLi = styled.li`
  margin: 0 10px;
`;

export default function LayOutDesignHead() {
  return (
    <Wrapper>
      <HeaderList>
        <div>로고</div>
        <NavList>
          <NavLi>로그인</NavLi>
          <NavLi>마이페이지</NavLi>
          <NavLi>검색</NavLi>
        </NavList>
      </HeaderList>
    </Wrapper>
  );
}
