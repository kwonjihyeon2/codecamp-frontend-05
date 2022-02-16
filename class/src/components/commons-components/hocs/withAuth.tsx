import { useEffect } from "react";
import { useRouter } from "next/router";

// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    // 새로고침하면 다시 실행되기때문에 useEffect로 렌더될때 한번만 실행시켜주기위해
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요!");
      router.push("/23-04-login-check");
    }
  }, []);

  return <Component {...props} />;
};
