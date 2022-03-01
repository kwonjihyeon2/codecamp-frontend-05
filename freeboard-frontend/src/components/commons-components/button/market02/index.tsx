import styled from "@emotion/styled";

const MiddleButton = styled.button`
  width: 10%;
  border: 1px solid #000;
  background-color: none;
  color: #bdbdbd;
  outline: none;
`;

export default function ProductMiddleButton(props) {
  return (
    <>
      <MiddleButton type={props.type} onClick={props.onClick}>
        {props.name}
      </MiddleButton>
    </>
  );
}
