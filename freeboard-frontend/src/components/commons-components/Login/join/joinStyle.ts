import styled from "@emotion/styled";

interface IpropsColor {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

export const WrapperBody = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: center;
`;

export const WrapperContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 50px;
`;

export const ChangeInput = styled.input`
  background: none;
  border: 1px solid #fff;
  border-bottom: 1px solid #000;
  padding: 5px;
  outline: none;
`;

export const ErrorColor = styled.div`
  color: red;
  font-size: 10px;
  margin: 10px 0;
`;

export const LoginBtn = styled.div`
  background-color: ${(props: IpropsColor) =>
    props.isActive ? "#000" : "#ebebeb"};
  border: 1px solid #ebebeb;
  padding: 10px 0;
  margin: 10px 0;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  cursor: ${(props: IpropsColor) => (props.isActive ? "pointer" : "auto")};
`;

export const UlButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LiInput = styled.div`
  width: 100%;
  text-align: left;
  margin: 5px 0;
`;

export const ButtonLink = styled.button`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 0;
  margin: 10px 0;
  position: relative;
  background: none;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  cursor: pointer;
`;

export const IconImg = styled.img`
  position: absolute;
  top: 22%;
  left: 5%;
  width: 24px;
  height: 24px;
`;
