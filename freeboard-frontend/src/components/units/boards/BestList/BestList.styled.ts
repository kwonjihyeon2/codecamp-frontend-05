import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 30px auto;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0 50px 0;
`;

export const WrapperListBox = styled.div`
  width: 24%;
  @media (max-width: 991px) {
    width: 48%;
  }
`;

export const BestImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const TitleText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2;
`;

export const ViewAll = styled.p`
  color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const TitleFont = styled.p`
  margin: 20px 0 0 0;
`;

export const ContentStyle = styled.h2`
  margin: 10px 0;
  font-weight: 700;
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DayTitle = styled.p`
  margin: 0;
  font-size: 12px;
  color: #bdbdbd;
`;

export const RoutingBox = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #ff385c;
  border-radius: 20px;
`;

export const TextBox = styled.div`
  font-size: 3rem;
  width: 30%;
  word-break: keep-all;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
`;

export const ButtonBox = styled.button`
  margin-top: 30px;
  padding: 10px 30px;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #ff385c;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
`;
