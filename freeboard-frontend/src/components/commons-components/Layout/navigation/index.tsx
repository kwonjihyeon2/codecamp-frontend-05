import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
// import { useEffect } from "react";
import { useContext } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
// import { useFetchUserInfoHook } from "../../hooks/useFetchUser";
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
  top: 100px;
  right: 15%;
  width: 200px;
  height: 300px;
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

const WrapperUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const NaviList = styled.li`
  margin-left: 10px;
  cursor: pointer;
  font-weight: 500;
`;

const NaviListStyle = styled.li`
  display: flex;
  flex-direction: column;
`;
const NaviDivStyle = styled.div`
  font-size: 0.8rem;
  color: #bdbdbd;
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
        <WrapperUl>
          {accessToken ? (
            <>
              <NaviListStyle>
                <div>
                  {data?.fetchUserLoggedIn.name}{" "}
                  <span onClick={LogOutUser}>
                    <MdOutlineLogout />
                  </span>
                </div>
                <NaviDivStyle>
                  마이 포인트 {data?.fetchUserLoggedIn.userPoint?.amount}
                </NaviDivStyle>
              </NaviListStyle>
              <NaviList>
                <FaUserCircle />
              </NaviList>
            </>
          ) : (
            <>
              <NaviList onClick={MoveToLogin}>로그인</NaviList>
              <NaviList>회원가입</NaviList>
              <NaviList>고객센터</NaviList>
            </>
          )}
        </WrapperUl>
        <div>마이페이지</div>
      </WrapperDiv>
    </Wrapper>
  );
}
