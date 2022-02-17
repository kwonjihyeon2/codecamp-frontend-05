import { useContext } from "react";
import { withAuth } from "../../src/components/commons-components/hocs/withAuth";
import { GlobalContext } from "../_app";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `; 매번 import 할 필요 없음 query로 불러오면됨

const LoginSuccessPage = () => {
  const { userInfo } = useContext(GlobalContext);
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  //로그인 검증 -> 모든 페이지에 다 적용시킬 수 없으니 컴포넌트로 따로 분리해서 closure로 실행시켜주도록
  //useEffect(() => {
  //새로고침하면 다시 실행되기때문에 useEffect로 렌더될때 한번만 실행시켜주기위해
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인을 먼저 해주세요!");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div> {userInfo?.name}님 로그인 성공!</div>;
};

export default withAuth(LoginSuccessPage);
