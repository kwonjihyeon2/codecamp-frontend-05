import styled from "@emotion/styled";
// import {image} from 'public'

import { IActive } from "./BoardCommentList.types";

export const NewBody = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  box-sizing: border-box;
`;
export const BoardContent = styled.div`
  width: 1200px;
  margin: 80px auto;
`;

export const Commentcontent = styled.div`
  margin: 0px auto;
  width: 1200px;
`;

export const CommentTitle = styled.div`
  margin: 40px 0;
  display: flex;
`;

export const StarIcon = styled.div`
  color: #bdbdbd;
`;

export const CommentBox = styled.div`
  width: 100%;
  /* height : 160px; */
  border: 1px solid #bdbdbd;
  margin: 20px 0;
  /* padding : 20px; */
  display: flex;
  flex-direction: column;
`;
export const OnComments = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CommentsInput = styled.textarea`
  border: none;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  height: 80px;
  padding: 20px;
  resize: none;
`;
export const CommentsCount = styled.div`
  width: 100%;
  /* border-top : 1px solid #bdbdbd; */
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  align-items: center;
`;
export const ChangeBtn = styled.div`
  background-color: ${(props: IActive) =>
    props.isActive === true ? "#ffd600" : "#c9c9c9"};
  color: ${(props: IActive) => (props.isActive === true ? "#000" : "#bdbdbd")};
  cursor: ${(props: IActive) =>
    props.isActive === true ? "pointer" : "default"};
  padding: 10px;
`;

export const CommentInfo = styled.div`
  width: 1200px;
  margin-bottom: 50px;
  margin: 0 auto;
`;

export const CommentDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0;
`;

export const CommentWriterBox = styled.div`
  width: 85%;
`;

export const WriterRating = styled.div`
  display: flex;
`;
export const DateColor = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  margin-top: 20px;
`;
