import { Modal } from "antd";
import { useRouter } from "next/router";
import { ComponentType, useContext, useEffect } from "react";
import { MakeGlobalContext } from "../../../../pages/_app";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export const withAuth =
  (Component: ComponentType) =>
  <P extends {}>(props: P) => {
    const router = useRouter();
    const { accessToken } = useContext(MakeGlobalContext);

    useEffect(() => {
      // console.log(222, accessToken);
      async function login() {
        if (!accessToken) {
          const newAccessToken = await getAccessToken();
          if (!newAccessToken) {
            Modal.error({
              content: "먼저 로그인을 해주세요",
            });
            router.push("/Login");
          }
        }
      }
      login();
    }, []);

    return <Component {...props} />;
  };
