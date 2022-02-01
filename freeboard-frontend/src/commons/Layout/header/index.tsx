import styled from "@emotion/styled/";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #e0e0e0;
`;
const HeaderList = styled.div`
  display: flex;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  align-items: center;
`;

const HeaderLogo = styled.div`
  width: 100px;
  margin-right: 10px;
`;
const NavList = styled.ul`
  display: flex;
  cursor: pointer;
  margin-bottom: 0;
`;

const NavLi = styled.li`
  margin: 0 10px;
  font-weight: 700;
`;

export default function LayOutDesignHead() {
  return (
    <Wrapper>
      <HeaderList>
        <HeaderLogo>로고</HeaderLogo>
        <NavList>
          <NavLi>HOME</NavLi>
          <NavLi>COMMUNITY</NavLi>
          <NavLi>MARKET</NavLi>
          <NavLi>MY</NavLi>
        </NavList>
      </HeaderList>
    </Wrapper>
  );
}
