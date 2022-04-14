import styled from "@emotion/styled";

const CommentMyInput = styled.input`
  border: none;
  background-color: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  width: 85%;
`;

interface IPropsInput {
  type?: string;
  value?: string;
  style?: {};
  defaultValue?: string;
  placeholder?: string;
  register?: {};
}

export default function CommentInput(props: IPropsInput) {
  return (
    <CommentMyInput
      type={props.type}
      value={props.value}
      style={props.style}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      autoFocus
      {...props.register}
    />
  );
}
