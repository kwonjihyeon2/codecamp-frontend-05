import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 60px 100px 60px;
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    padding: 30px 30px 100px 30px;
  }
`;

export const WrapperContainer = styled.div`
  width: 100%;
  max-width: 1240px;
`;

export const MainText = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const MainSpan = styled.span`
  color: #ff496a;
  margin-left: 10px;
`;

export const ResultBox = styled.div`
  width: 100%;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #e0e0e0;
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-weight: 700;
  font-size: 1rem;
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    flex-wrap: wrap;
  }
`;

export const DataBox = styled.div`
  width: 25%;
  margin-right: 10px;
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    width: 47%;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 300px;
  @media (max-width: 1199px) {
    height: 250px;
  }
  @media ${breakPoints.tablet} {
    height: 200px;
  }
`;

export const BoxImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleText = styled.div`
  font-weight: 700;
  font-size: 1rem;
  margin: 10px 0 0;
`;
