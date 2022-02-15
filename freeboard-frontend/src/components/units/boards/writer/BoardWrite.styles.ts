import styled from "@emotion/styled";

export const NewBody = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 100px 0;
  font-family: Noto Sans KR;
`;

export const Main = styled.div`
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 80px 100px;
`;

export const Title = styled.div`
  font-size: 36px;
  text-align: center;
  padding-bottom: 40px;
  font-weight: 700;
`;

export const Content = styled.div`
  width: 100%;
`;
export const UserInfo = styled.div`
  display: flex;
  /* flex-direction: row; */
  margin: 40px 0;
  width: 100%;
  justify-content: space-between;
`;
export const UserDiv = styled.div`
  width: 480px;
`;
export const UserStar = styled.span`
  color: #ffd600;
  margin-left: 5px;
`;
export const ErrorMessage = styled.div`
  margin-top: 5px;
  text-align: center;
  font-size: 10px;
  color: red;
`;

export const CommonMargin = styled.div`
  margin: 40px 0;
`;

export const CommonInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  border: 1px solid #bdbdbd;
`;

export const PostNum = styled.input`
  width: 80px;
  padding: 15px;
  border: 1px solid #bdbdbd;
`;

export const PostBtn = styled.button`
  padding: 15px;
  border: 1px solid #000;
  background-color: #000;
  color: white;
  margin-left: 15px;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 15px;
  margin-top: 15px;
  resize: none;
  white-space: pre-wrap;
`;
export const PostBox = styled.div`
  margin-top: 15px;
`;

export const LoadImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;
export const GetImg = styled.div`
  width: 80px;
  height: 80px;
  background-color: #bdbdbd;
  margin-right: 15px;
  /* padding: 15px; */
  text-align: center;
  line-height: 25px;
  cursor: pointer;
`;

export const MainChoice = styled.input`
  margin: 0 10px;
  cursor: pointer;
`;

export const Footer = styled.div`
  text-align: center;
`;
interface IpropsIsActive {
  isActive: boolean;
}

export const FtBtn = styled.button`
  background-color: ${(props: IpropsIsActive) =>
    props.isActive ? "#ffd600" : "none"};
  color: ${(props: IpropsIsActive) => (props.isActive ? "#000" : "#bdbdbd")};
  /* true라면 === true 생략 가능 false라면 ! */
  width: 180px;
  height: 50px;
  border: none;
  cursor: pointer;
`;

export const nonInput = styled.input`
  display: none;
`;
