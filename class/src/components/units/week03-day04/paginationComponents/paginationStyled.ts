import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NumberStyle = styled.button`
  color: #000;
  cursor: pointer;
  background-color: #fff;
  padding: 5px;
  border: 2px solid #fff;
  &:hover {
    color: green;
    font-weight: 700;
    /* padding: 5px; */
    border-bottom: 2px solid #bdbdbd;
  }
`;

export const PrevButton = styled.button``;

export const Styles = css`
  color: green;
`;
