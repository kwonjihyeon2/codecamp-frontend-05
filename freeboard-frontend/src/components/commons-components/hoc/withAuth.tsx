import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("saveToken")) {
      Modal.error({
        content: "먼저 로그인을 해주세요",
      });
      router.push("/Login");
    }
  }, []);

  return <Component {...props} />;
};
