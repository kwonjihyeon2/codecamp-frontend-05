import styled from "@emotion/styled";

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
