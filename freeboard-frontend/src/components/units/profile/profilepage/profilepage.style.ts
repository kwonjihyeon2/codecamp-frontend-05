import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const WrapperBody = styled.div`
  width: 100%;
  max-width: 1240px;
`;

export const WrapperUl = styled.ul`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 30px 0;
  @media (max-width: 1199px) {
    padding: 30px 60px;
  }
`;

export const NaviList = styled.li`
  margin-right: 20px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: rgb(255, 56, 92);
  }
  &:active {
    color: rgb(255, 56, 92);
  }
`;

export const WrapperContents = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1199px) {
    flex-wrap: wrap;
    padding: 0 60px;
  }
`;

export const WrapperList = styled.div`
  width: 70%;
  @media (max-width: 1199px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
`;

export const WrapperProfile = styled.div`
  width: 25%;
  @media (max-width: 1199px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ProfileLeft = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px 0 rgba(63, 71, 77, 0.06);
  padding: 50px;
  text-align: center;
  border-radius: 20px;
`;

export const ProfileLeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1199px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const InfoName = styled.div`
  @media (max-width: 1199px) {
    margin-left: 30px;
    text-align: left;
  }
`;

export const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  margin: 10px 0;
  @media (max-width: 991px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileName = styled.h1`
  margin: 5px 0;
`;

export const ProfileChoice = styled.div`
  width: 200px;
  padding: 30px 0 0 0;
  margin-top: 30px;
  border-top: 1px solid #e0e0e0;
  @media (max-width: 1199px) {
    width: 100%;
    padding: 30px 30px 0 30px;
  }
`;
export const ProfileChoiceul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const IconStyle = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;
