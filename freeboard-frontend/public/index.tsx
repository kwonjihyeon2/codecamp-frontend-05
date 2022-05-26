import { useContext } from "react";
import { MakeGlobalContext } from "../pages/_app";

export default function SearchPage() {
  const { search } = useContext(MakeGlobalContext);

  return (
    <div>
      <div>{search}에 대한 검색 결과</div>
    </div>
  );
}
