import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Wrapper = styled.div`
  display : ${(props) => (props.openNavi ? "block" : "none;")}
  width: 1240px;
  background : #000;
  margin : 0 auto;
  position : relative;
`;

const WrapperDiv = styled.div`
  position: absolute;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  top: 100px;
  right: 15%;
  width: 200px;
  padding: 35px;
  border-radius: 30px;
  z-index: 10000;
  @media (max-width: 1570px) {
    right: 5%;
  }
  @media (max-width: 1400px) {
    right: 3%;
  }
  @media (max-width: 1310px) {
    right: 0%;
  }
`;

const LoginUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const LogoutUl = styled.ul`
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const NaviList = styled.li`
  cursor: pointer;
  font-weight: 500;
  margin: 10px 0;
`;

const NaviListStyle = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
`;

const NaviDivStyle = styled.div`
  font-size: 0.5rem;
  color: #bdbdbd;
`;

const UserIcon = styled.li`
  font-size: 2rem;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      createdAt
      userPoint {
        amount
      }
    }
  }
`;

const LOGOUT = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayOutDesignNavi(props) {
  const router = useRouter();
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT);

  const { accessToken } = useContext(MakeGlobalContext);

  const MoveToLogin = () => {
    router.push("/Login");
  };

  const LogOutUser = () => {
    logoutUser();
    alert("로그아웃 되었습니다. 메인 페이지로 이동합니다.");
    router.push("/mainpage");
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <Wrapper openNavi={props.openNavi}>
      <WrapperDiv>
        {accessToken ? (
          <LoginUl>
            <NaviListStyle>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                {data?.fetchUserLoggedIn.name}{" "}
                <MdOutlineLogout
                  onClick={LogOutUser}
                  style={{
                    marginLeft: "5px",
                  }}
                />
              </div>
              <NaviDivStyle>
                마이 포인트 {data?.fetchUserLoggedIn.userPoint?.amount}
              </NaviDivStyle>
            </NaviListStyle>
            <UserIcon>
              <FaUserCircle />
            </UserIcon>
          </LoginUl>
        ) : (
          <LogoutUl>
            <NaviList onClick={MoveToLogin}>로그인</NaviList>
            <NaviList>회원가입</NaviList>
          </LogoutUl>
        )}
        <ul>
          <NaviList>OPEN-API</NaviList>
          <NaviList>커뮤니티</NaviList>
          <NaviList>중고마켓</NaviList>
          <NaviList>마이페이지</NaviList>
        </ul>
      </WrapperDiv>
    </Wrapper>
  );
}
