import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const MiddleButton = styled.button`
  width: 20%;
  padding: 10px 0;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  outline: none;
  &:hover {
    border: 1px solid #ff385c;
    background-color: #ff385c;
  }
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    width: 50%;
  }
`;

interface IPropsMiddle {
  style?: {};
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
  name?: string;
}

export default function ProductMiddleButton(props: IPropsMiddle) {
  return (
    <>
      <MiddleButton type={props.type} onClick={props.onClick}>
        {props.name}
      </MiddleButton>
    </>
  );
}
