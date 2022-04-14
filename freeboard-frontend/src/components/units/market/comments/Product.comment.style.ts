import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  margin: 0 auto;
  @media (max-width: 1199px) {
    justify-content: center;
  } ;
`;

export const WrapperBox = styled.div`
  width: 100%;
  max-width: 1024px;
`;

export const WrapperComment = styled.div`
  border: 1px solid #c9c9c9;
`;

export const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  border-top: 1px solid #c9c9c9;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: none;
  outline: none;
`;

export const CommentQna = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #c9c9c9;
`;

export const ProductPrice = styled.div`
  /* font-size: 1.5rem; */
  font-weight: 700;
`;

export const BasicSpan = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 3px;
`;

export const MoreStyle = styled.button`
  border: none;
  background-color: #fff;
  color: #c9c9c9;
  cursor: pointer;
`;
