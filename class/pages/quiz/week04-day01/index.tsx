import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChangePage() {
  const router = useRouter();
  const [isChange, setIsChange] = useState<boolean>(false);

  useEffect(() => {
    alert("Rendered!");

    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    alert("Changed!!");
  });

  const onChangeBtn = () => {
    setIsChange((prev) => !prev);
  };

  const MoveToPage = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={onChangeBtn}>변경</button>
      <button onClick={MoveToPage}>이동</button>
    </div>
  );
}
