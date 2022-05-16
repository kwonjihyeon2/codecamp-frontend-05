import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 1199px) {
    padding: 30px 60px;
  }
`;

export const WrapperTitle = styled.div`
  padding: 0 20px 10px 0px;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 2rem;
`;

export const TitleBox = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 20px;
`;

export const TitleSpan = styled.span`
  color: #ff385c;
`;

export const WrapperBody = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    flex-wrap: wrap;
  }
`;

export const CommonContainer = styled.div`
  width: 15%;
  font-size: 1rem;
  font-weight: 700;
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    width: 30%;
  }
`;

export const TitleContainer = styled.div`
  width: 40%;
  font-size: 1rem;
  font-weight: 700;
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    width: 50%;
  }
`;

export const TitleRemark = styled.div`
  color: #bdbdbd;
  font-size: 0.8rem;
`;

export const ContainerImg = styled.img`
  width: 100%;
`;

export const PaymentBox = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
`;
