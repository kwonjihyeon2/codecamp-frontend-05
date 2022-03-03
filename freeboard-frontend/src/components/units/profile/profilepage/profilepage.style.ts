import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid #e0e0e0;
`;

export const WrapperBody = styled.div`
  width: 100%;
  max-width: 1240px;
`;

export const WrapperUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
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
`;

export const WrapperList = styled.div`
  width: 100%;
  max-width: 900px;
  @media (max-width: 1240px) {
    margin-left: 30px;
  }
`;

export const WrapperProfile = styled.div`
  width: 300px;
  /* height: 50vh; */
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px 0 rgba(63, 71, 77, 0.06);
  padding: 50px 50px;
  text-align: center;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 10px 0;
`;

export const ProfileName = styled.h1`
  margin: 5px 0;
`;

export const ProfileChoice = styled.div`
  width: 200px;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #e0e0e0;
`;
export const ProfileChoiceul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const IconStyle = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;
