import styled from "@emotion/styled";

const ProductMyInput = styled.input`
  border: none;
  background-color: none;
  outline: none;
`;

export default function ProductInput(props) {
  return <ProductMyInput type={props.type} value={props.value} />;
}
