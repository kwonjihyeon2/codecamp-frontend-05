import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 75%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("/main/bg01.jpeg") no-repeat center;
`;

const slideup = keyframes`
    from{
        opacity : 0%;
        bottom : 0%;
    }
    to{
        opacity  :100%;
        bottom : 20%;
    }
`;

export const MainContent = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: ${slideup};
  animation-duration: 2s;
`;

export const WrapperBody = styled.div`
  background: #000;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

export const LoginBtn = styled.button`
  background: red;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-top: 30px;
  padding: 10px 80px;
`;
