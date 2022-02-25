import { Modal } from "antd";
import { useRouter } from "next/router";
import { ComponentType, useContext, useEffect } from "react";
import { MakeGlobalContext } from "../../../../pages/_app";

export const withAuth =
  (Component: ComponentType) =>
  <P extends {}>(props: P) => {
    const router = useRouter();
    const { accessToken } = useContext(MakeGlobalContext);

    useEffect(() => {
      console.log(222, accessToken);
      if (accessToken) {
        Modal.error({
          content: "먼저 로그인을 해주세요",
        });
        router.push("/Login");
      }
    }, []);

    return <Component {...props} />;
  };
