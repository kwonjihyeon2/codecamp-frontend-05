import styled from "@emotion/styled/";
import { MoveToPageHook } from "../../hooks/MoveToPageHook";
import { FaSearch, FaUserShield } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: #000;
`;
const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  align-items: center;
  color: #fff;
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
  border-bottom: 1px solid #000;
  &:hover {
    transition: all 0.5s;
    transform: translateY(-5px);
    border-bottom: 1px solid #fff;
  }
`;

const UserBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
`;

const UserIcon = styled.div`
  width: 80px;
  margin-left: 20px;
  background-color: #fff;
  color: #000;
  border-radius: 30px;
  padding: 10px 5px;
  font-size: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default function LayOutDesignHead(props) {
  const { moveToPage } = MoveToPageHook();

  const onClickOpenNavi = () => {
    props.setOpenNavi((prev: boolean) => !prev);
  };
  console.log(props.openNavi);

  return (
    <Wrapper>
      <HeaderList>
        <HeaderLogo onClick={moveToPage("/mainpage")}>로고</HeaderLogo>
        <NavList>
          <NavLi>OPEN-API</NavLi>
          <NavLi onClick={moveToPage("/boards")}>COMMUNITY</NavLi>
          <NavLi onClick={moveToPage("/market")}>MARKET</NavLi>
          <NavLi>MY</NavLi>
        </NavList>
        <UserBox>
          <FaSearch />
          <UserIcon onClick={onClickOpenNavi}>
            <FiMenu />
            <FaUserShield style={{ fontSize: "1.5rem" }} />
          </UserIcon>
        </UserBox>
      </HeaderList>
    </Wrapper>
  );
}
