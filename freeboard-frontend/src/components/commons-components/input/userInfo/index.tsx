import styled from "@emotion/styled";

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
  value?: string;
  defaultValue?: string;
  onChange?: () => void;
}

export default function UserInfoInput(props: IPropsInput) {
  return (
    <UserInput
      type={props.type}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    />
  );
}
