import styled from "@emotion/styled";
import { ChangeEvent } from "react";

const UserInput = styled.input`
  width: 40%;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0, 02);
  }
`;

interface IPropsInput {
  style?: {};
  type?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export default function UserInfoInput(props: IPropsInput) {
  return (
    <UserInput
      type={props.type}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      readOnly={props.readOnly}
    />
  );
}
