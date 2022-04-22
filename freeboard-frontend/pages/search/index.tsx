import { useContext } from "react";
import { MakeGlobalContext } from "../_app";

export default function SearchPage() {
  const { search } = useContext(MakeGlobalContext);
  console.log(search);

  return (
    <div>
      <div>{search}에 대한 검색 결과</div>
    </div>
  );
}
