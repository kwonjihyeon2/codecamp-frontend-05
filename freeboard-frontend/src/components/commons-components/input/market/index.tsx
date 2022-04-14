import styled from "@emotion/styled";

const ProductMyInput = styled.input`
  border: none;
  background-color: none;
  outline: none;
`;

interface IPropsInput {
  type?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
}

export default function ProductInput(props: IPropsInput) {
  return (
    <ProductMyInput
      type={props.type}
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
    />
  );
}
