import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요!");
      router.push("/23-04-login-check");
    } else {
      setIsloading(false);
    }
  }, []);

  return {
    isLoading,
  };
}
