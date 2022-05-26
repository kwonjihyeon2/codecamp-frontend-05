import styled from "@emotion/styled/";

export const NewBody = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 50px auto;
  font-family: Noto Sans KR;
`;
export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BoardCount = styled.span`
  color: #ff385c;
  font-weight: 700;
`;

export const Selection = styled.select`
  padding: 7px 10px;
  border: 1px solid #e5e5e5;
`;

export const SearchInput = styled.input`
  padding: 5px 10px;
  border: 1px solid #e5e5e5;
  margin: 0 10px;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  padding: 5px 15px;
  border: 1px solid #ff385c;
  background-color: #ff385c;
  color: white;
  cursor: pointer;
`;
export const WrapperList = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #000;
`;
export const DataTitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: #000;
  border: 1px solid #e5e5e5;
  background-color: #f9f9f9;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const DataListBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #4f4f4f;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const NumberBox = styled.div`
  width: 10%;
  overflow: hidden;
`;

export const TitleTopBox = styled.div`
  width: 50%;
`;
export const TitleBox = styled.div`
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
  &:hover {
    color: #ff385c;
  }
`;
export const WriterDate = styled.div`
  width: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const ListBottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CreateBtn = styled.button`
  border: 1px solid #f2f2f2;
  padding: 15px;
  font-weight: 700;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: ease-in 0.3s;
  &:hover {
    color: white;
    background-color: #ff385c;
  }
`;
export const PencilIcon = styled.span`
  margin-left: 10px;
`;

interface IPropsWord {
  isMatched: boolean;
}

export const Word = styled.span`
  color: ${(props: IPropsWord) => (props.isMatched ? "#FF385C" : "#000")};
`;
