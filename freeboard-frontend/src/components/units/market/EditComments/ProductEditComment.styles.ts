import styled from "@emotion/styled";
import { FaUserCircle } from "react-icons/fa";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const WrapperLeft = styled.div`
  display: flex;
  width: 90%;
`;

export const WrapperRight = styled.div`
  display: flex;
  width: 10%;
  justify-content: flex-end;
`;
export const CommentUser = styled.div`
  margin-left: 10px;
  width: 100%;
`;

export const ProfileIcon = styled(FaUserCircle)`
  font-size: 32px;
  color: #ccc;
`;

export const CommentButton = styled.button`
  background-color: #fff;
  margin: 0 5px;
  border: none;
  font-size: 20px;
`;

export const CommentInfo = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const CmData = styled.span`
  color: #bdbdbd;
  font-size: 12px;
  margin-left: 5px;
  font-weight: 400;
`;

export const CommentTxt = styled.div`
  padding: 10px 0;
`;
