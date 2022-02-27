import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
// import { useEffect } from "react";
import { useContext } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import { IQuery } from "../../../../commons/types/generated/types";
// import { useFetchUserInfoHook } from "../../hooks/useFetchUser";

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0;
`;

const WrapperDiv = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const WrapperUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
`;

const NaviList = styled.li`
  margin-left: 10px;
  cursor: pointer;
  font-weight: 500;
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

export default function LayOutDesignNavi() {
  const router = useRouter();

  const { accessToken } = useContext(MakeGlobalContext);
  // console.log(444, accessToken);

  const MoveToLogin = () => {
    router.push("/Login");
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <Wrapper>
      <WrapperDiv>
        <WrapperUl>
          {accessToken ? (
            <>
              <NaviList>{data?.fetchUserLoggedIn.name}님 환영합니다 !</NaviList>
              <NaviList>
                마이포인트 {data?.fetchUserLoggedIn.userPoint?.amount}
              </NaviList>
              <NaviList>로그아웃</NaviList>
            </>
          ) : (
            <>
              <NaviList onClick={MoveToLogin}>로그인</NaviList>
              <NaviList>회원가입</NaviList>
              <NaviList>고객센터</NaviList>
            </>
          )}
        </WrapperUl>
      </WrapperDiv>
    </Wrapper>
  );
}
