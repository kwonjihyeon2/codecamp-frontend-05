import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  /* justify-content: center; */
  margin: 50px auto;
`;

export const WrapperBody = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
`;

export const WrapperText = styled.div`
  width: 50%;
  margin-left: 50px;
`;

export const WrapperContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const productTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ProductName = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0px;
`;

export const ProductRemarks = styled.p`
  color: #bdbdbd;
`;

export const Icons = styled.button`
  background-color: #fff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ProductPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const BasicSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-left: 3px;
`;

export const StyleSpan = styled.span`
  letter-spacing: -1px;
  color: #fa622f;
  margin-left: 10px;
`;

export const CancelPrice = styled.div`
  color: #bdbdbd;
  text-decoration: line-through;
`;

export const TextBox = styled.div`
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  padding: 20px 0;
`;

export const WrapperDetail = styled.div`
  margin: 50px 0;
  padding: 30px 0;
  width: 100%;
  border-top: 2px solid #ededed;
  border-bottom: 2px solid #ededed;
`;

export const SlickBox = styled.div`
  width: 100%;
`;

export const buttonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const TagStyle = styled.div`
  margin-right: 10px;
  border-radius: 3px;
  color: #fa622f;
`;

export const IButton = styled.button`
  width: 10%;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  color: #bdbdbd;
  padding: 13px 10px;
  font-size: 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #fa622f;
  }
`;

interface IpropsButton {
  isOpen: boolean;
}

export const MoreBox = styled.div`
  position: absolute;
  top: -20%;
  right: 5%;
  /* width: 100px; */
  display: ${(props: IpropsButton) => (props.isOpen ? "flex" : "none")};
  justify-content: space-between;
  border-radius: 10px;
  transition: all ease 2s;
`;

export const ViewBox = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 20%;
  right: 7%;
  align-self: flex-start;
  width: 100px;
  border: 1px solid #c9c9c9;
  padding: 10px;
`;

export const ViewText = styled.p`
  font-weight: 700;
  font-size: 1rem;
`;

export const ContentsBox = styled.div`
  border: 1px solid #c9c9c9;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
