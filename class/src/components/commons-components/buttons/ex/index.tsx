import styled from "@emotion/styled";

interface IColor {
  isValid: boolean;
}

interface IPropsBtn {
  isValid: boolean;
  name: string;
  type: any;
}

const ExButton = styled.button`
  background-color: ${(props: IColor) => (props.isValid ? "red" : "")};
`;

export default function ButtonEx(props: IPropsBtn) {
  return (
    <ExButton type={props.type} isValid={props.isValid}>
      {props.name}
    </ExButton>
  );
}
