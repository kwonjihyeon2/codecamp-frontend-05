import styled from "@emotion/styled";
// import {image} from 'public'

import { IActive } from "./BoardComment.types";

export const NewBody = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  box-sizing: border-box;
`;
export const BoardContent = styled.div`
  width: 1200px;
  margin: 80px auto;
`;

export const CommentContent = styled.div`
  margin: 0px auto;
  width: 1200px;
`;

export const CommentTitle = styled.div`
  margin: 20px 0;
  font-weight: 700;
  /* font-size: 24px; */
`;

export const CommentBox = styled.div`
  width: 100%;
  /* height : 160px; */
  border: 1px solid #bdbdbd;
  /* margin: 20px 0; */
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const OnComments = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const CommonsInput = styled.input`
  border: none;
  border-bottom: 1px solid #bdbdbd;
  margin-right: 10px;
  padding-left: 10px;
  outline: none;
  &:focus {
    transition: all 1.5s;
    border-bottom: 1px solid #000;
  }
`;
export const CommentsInput = styled.textarea`
  border: 1px solid #fff;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  height: 80px;
  margin: 10px 0;
  padding: 10px;
  resize: none;
  outline: none;
  &:focus {
    border-bottom: 1px solid #000;
  }
`;
export const CommentsCount = styled.div`
  width: 100%;
  /* border-top : 1px solid #bdbdbd; */
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;
`;
export const ChangeBtn = styled.div`
  background-color: ${(props: IActive) =>
    props.isActive ? "#ffd600" : "#c9c9c9"};
  color: ${(props: IActive) => (props.isActive ? "#000" : "#bdbdbd")};
  cursor: ${(props: IActive) => (props.isActive ? "pointer" : "default")};
  padding: 5px;
`;

export const CommentInfo = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const EditBox = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const CommentDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  margin: 0 20px;
  padding: 20px 0;
`;

export const CommentWriterBox = styled.div`
  width: 85%;
`;

export const WriterRating = styled.div`
  display: flex;
`;
export const DateColor = styled.span`
  color: #bdbdbd;
  font-size: 12px;
  margin-top: 10px;
`;
// 별이나 유튜브 등 css하고싶으면 관련 파일 import

export const CommentArea = styled.input`
  width: 100%;
  border: none;
  padding: 10px 0;
  resize: none;
`;

export const ChangeComment = styled.input`
  border: 1px solid #fff;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  /* height: 80px; */
  margin: 10px 0;
  padding: 10px;
  resize: none;
  outline: none;
  &:focus {
    border-bottom: 1px solid #000;
  }
`;

export const CommentWriter = styled.input`
  border: none;
  font-weight: 700;
  width: fit-content;
`;

export const ButtonStyle = styled.button`
  background-color: #fff;
  margin: 0 5px;
  border: none;
  &:hover {
    color: #21c997;
  }
`;
