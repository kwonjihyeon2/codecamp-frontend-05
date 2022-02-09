import styled from "@emotion/styled/";
import { useRouter } from "next/router";

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
  border-bottom: 1px solid #fff;
  &:hover {
    transition: all 0.5s;
    transform: translateY(-5px);
    border-bottom: 1px solid #000;
  }
`;

export default function LayOutDesignHead() {
  const router = useRouter();

  const MoveToMain = () => {
    router.push("/");
  };

  const MoveToList = () => {
    router.push("/boards");
  };

  return (
    <Wrapper>
      <HeaderList>
        <HeaderLogo>로고</HeaderLogo>
        <NavList>
          <NavLi onClick={MoveToMain}>HOME</NavLi>
          <NavLi>OPEN-API</NavLi>
          <NavLi onClick={MoveToList}>COMMUNITY</NavLi>
          <NavLi>MARKET</NavLi>
          <NavLi>MY</NavLi>
        </NavList>
      </HeaderList>
    </Wrapper>
  );
}
