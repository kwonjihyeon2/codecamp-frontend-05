import styled from "@emotion/styled";

const SmallButton = styled.button`
  padding: 10px;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  outline: none;
  cursor: pointer;
  margin: 5px;
`;

interface IPropsSmall {
  style?: {};
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void | ((id: Number) => () => void);
  name?: string;
}

export default function ProductSmallButton(props: IPropsSmall) {
  return (
    <>
      <SmallButton
        style={props.style}
        type={props.type}
        onClick={props.onClick}
      >
        {props.name}
      </SmallButton>
    </>
  );
}
