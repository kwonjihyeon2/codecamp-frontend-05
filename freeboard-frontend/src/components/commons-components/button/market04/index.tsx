import styled from "@emotion/styled";

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
`;

interface IPropsClick {
  style?: {};
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
  name?: string;
}

export default function ProductClickButton(props: IPropsClick) {
  return (
    <>
      <SubmitButton
        style={props.style}
        type={props.type}
        onClick={props.onClick}
      >
        {props.name}
      </SubmitButton>
    </>
  );
}
