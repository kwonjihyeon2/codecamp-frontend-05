import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import * as N from "./navigation.style";
import { MoveToPageHook } from "../../hooks/MoveToPageHook";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      createdAt
      picture
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

export interface IPropsNavi {
  openNavi: boolean;
}

export default function LayOutDesignNavi(props: IPropsNavi) {
  const router = useRouter();
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT);

  const { accessToken } = useContext(MakeGlobalContext);
  const { moveToPage } = MoveToPageHook();

  const LogOutUser = () => {
    logoutUser();
    alert("로그아웃 되었습니다. 메인 페이지로 이동합니다.");
    router.push("/mainpage");
  };
  const onClickJoin = () => {
    router.push("/Login/join");
  };

  const onClickLogin = () => {
    router.push("/Login");
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <N.Wrapper openNavi={props.openNavi}>
      <N.WrapperDiv>
        {accessToken ? (
          <N.LoginUl>
            <N.NaviListStyle>
              <N.NaviStyleBox>
                {data?.fetchUserLoggedIn.name}{" "}
                <MdOutlineLogout
                  onClick={LogOutUser}
                  style={{
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />
              </N.NaviStyleBox>
              <N.NaviDivStyle>
                마이 포인트 {data?.fetchUserLoggedIn.userPoint?.amount}
              </N.NaviDivStyle>
            </N.NaviListStyle>
            <N.UserIcon>
              {data?.fetchUserLoggedIn.picture ? (
                <img
                  style={{ width: "100%" }}
                  src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`}
                />
              ) : (
                <FaUserCircle />
              )}
            </N.UserIcon>
          </N.LoginUl>
        ) : (
          <N.LogoutUl>
            <N.NaviList onClick={onClickLogin}>로그인</N.NaviList>
            <N.NaviList onClick={onClickJoin}>회원가입</N.NaviList>
          </N.LogoutUl>
        )}
        <ul>
          <N.NaviList onClick={moveToPage("/openapi")}>OPEN-API</N.NaviList>
          <N.NaviList onClick={moveToPage("/boards")}>커뮤니티</N.NaviList>
          <N.NaviList onClick={moveToPage("/market")}>중고마켓</N.NaviList>
          <N.NaviList onClick={moveToPage("/mypage")}>마이페이지</N.NaviList>
        </ul>
      </N.WrapperDiv>
    </N.Wrapper>
  );
}
