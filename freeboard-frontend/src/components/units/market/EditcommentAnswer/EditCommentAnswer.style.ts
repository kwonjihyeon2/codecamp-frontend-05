import styled from "@emotion/styled";
import { FaUserCircle } from "react-icons/fa";

export const Wrapper = styled.div`
  width: 100%;
`;

export const WrapperEdit = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ProfileIcon = styled(FaUserCircle)`
  font-size: 1rem;
  color: #ccc;
`;

export const ProfileInfo = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-left: 5px;
`;

export const CommentTxt = styled.div`
  padding: 10px 0;
`;

export const CommentButton = styled.button`
  background-color: #fff;
  margin: 0 5px;
  border: none;
  font-size: 20px;
`;
