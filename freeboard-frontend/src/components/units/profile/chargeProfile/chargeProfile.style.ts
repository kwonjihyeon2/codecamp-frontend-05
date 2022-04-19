import styled from "@emotion/styled";

export const ButtonColor = styled.button`
  border: 1px solid #e0e0e0;
  background-color: #fff;
  font-weight: 700;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 100px 0;
  @media (max-width: 1199px) {
    padding: 0 60px 100px 60px;
  }
`;

export const WrapperBody = styled.div`
  width: 100%;
  max-width: 1240px;
`;

export const MypageBox = styled.div`
  width: 100%;
  padding: 50px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px 0 rgba(63, 71, 77, 0.06);
`;

export const SettingTxt = styled.div`
  font-weight: 700;
  margin-bottom: 50px;
  font-size: 2rem;
`;

export const UserName = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  position: relative;
  span {
    width: 15%;
    margin-right: 10px;
  }
  .btn {
    border: 1px solid #ff385c;
  }
`;

export const Picture = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ccc;
`;

export const ChargeBtn = styled.button`
  border: 1px solid #e0e0e0;
  background-color: #fff;
  font-weight: 700;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const MoneyTxt = styled.div`
  margin-top: 5px;
  color: #bbb;
  font-weight: 500;
  font-size: 0.8rem;
`;

export const SubmitInfo = styled.button`
  width: 30%;
  margin: 50px 0;
  padding: 10px 0;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
