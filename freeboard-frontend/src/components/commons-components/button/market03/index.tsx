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

export default function ProductSmallButton(props) {
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
