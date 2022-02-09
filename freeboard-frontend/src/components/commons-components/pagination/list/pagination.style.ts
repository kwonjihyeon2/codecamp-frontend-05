import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const ContainerBox = styled.div`
  width: 50%;
  text-align: center;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

interface IProsMatch {
  isMatched: boolean;
}

export const CommonSpan = styled.span`
  margin: 0px 10px;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 3px;
  border-bottom: 2px solid
    ${(props: IProsMatch) => (props.isMatched ? "red" : "#fff")};
  padding: 5px;
  color: ${(props: IProsMatch) => (props.isMatched ? "red" : "black")};
  font-weight: ${(props: IProsMatch) => (props.isMatched ? 700 : "static")};
  &:hover {
    color: red;
    font-weight: 700;
  }
`;
