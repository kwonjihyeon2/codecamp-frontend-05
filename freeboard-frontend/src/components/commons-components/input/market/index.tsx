import styled from "@emotion/styled";
import { ChangeEvent } from "react";

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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductInput(props: IPropsInput) {
  return (
    <ProductMyInput
      type={props.type}
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
