interface IPropsNavi {
  openNavi: boolean;
}

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: ${(props: IPropsNavi) => (props.openNavi ? "block" : "none;")};
  width: 1240px;
  background: #000;
  margin: 0 auto;
  position: relative;
`;

export const WrapperDiv = styled.div`
  position: fixed;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  top: 100px;
  right: 15%;
  width: 200px;
  padding: 35px;
  border-radius: 30px;
  z-index: 1000;
  @media (max-width: 1570px) {
    right: 5%;
  }
  @media (max-width: 1400px) {
    right: 3%;
  }
  @media (max-width: 1310px) {
    right: 0%;
  }
  @media (max-width: 1199px) {
    right: 30px;
  }
`;

export const LoginUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const LogoutUl = styled.ul`
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const NaviList = styled.li`
  cursor: pointer;
  font-weight: 500;
  margin: 10px 0;
`;

export const NaviListStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.25rem;
`;

export const NaviStyleBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const NaviDivStyle = styled.div`
  font-size: 0.5rem;
  color: #bdbdbd;
`;

export const UserIcon = styled.li`
  font-size: 2rem;
  width: 35px;
  display: flex;
`;
