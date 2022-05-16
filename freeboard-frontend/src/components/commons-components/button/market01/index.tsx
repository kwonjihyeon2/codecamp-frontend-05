import styled from "@emotion/styled";

const BigButton = styled.button`
  /* width: 80%; */
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface IPropsBig {
  style?: {};
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
  name?: string;
}

export default function ProductBigButton(props: IPropsBig) {
  return (
    <>
      <BigButton style={props.style} type={props.type} onClick={props.onClick}>
        {props.name}
      </BigButton>
    </>
  );
}
