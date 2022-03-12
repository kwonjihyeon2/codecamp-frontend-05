import styled from "@emotion/styled/";

interface Istyle {
  scrollPosition: number;
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  position: ${(props: Istyle) => (props.scrollPosition > 100 ? "fixed" : "static")};
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  top: 0;
  left: 0;
  z-index: 100;
`;
export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  align-items: center;
  z-index: 1000;
`;

export const HeaderLogo = styled.div`
  width: 100px;
  margin-right: 10px;
  color: rgb(255, 56, 92);
  z-index: 1000;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  cursor: pointer;
  margin-bottom: 0;
`;

export const NavLi = styled.li`
  margin: 0 10px;
  font-weight: 700;
  color: #000;
  border-bottom: 1px solid #ffff;
  &:hover {
    transition: all 0.5s;
    transform: translateY(-5px);
    border-bottom: 1px solid rgb(255, 56, 92);
    color: rgb(255, 56, 92);
  }
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
`;

export const UserIcon = styled.div`
  width: 80px;
  margin-left: 20px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  color: #000;
  border-radius: 30px;
  padding: 10px 5px;
  font-size: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SearchBox = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  padding: 5px 10px 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchIconSpan = styled.span`
  color: #fff;
  background-color: rgb(255, 56, 92);
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
