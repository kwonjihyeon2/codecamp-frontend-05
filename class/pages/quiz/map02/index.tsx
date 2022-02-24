import { useRouter } from "next/router";

export default function MovePage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/quiz/map01");
  };

  return (
    <div>
      <button onClick={onClickMove}>지도로 이동해보자~!</button>
    </div>
  );
}
