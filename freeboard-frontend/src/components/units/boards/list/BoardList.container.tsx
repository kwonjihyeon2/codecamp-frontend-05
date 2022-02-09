import BoardListPageUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent } from "react";

interface IPropsList {
  data: any;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function BoardListPage(props: IPropsList) {
  const router = useRouter();

  const CreateNewBoard = () => {
    router.push("/boards/new");
  };
  // 클릭했을때 상세페이지로 가는 것 props onclick으로 연결

  const GoToDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) console.log(event.target.id);
    if (event.target instanceof Element)
      router.push(`boards/${event.target.id}`);
  };

  return (
    <>
      <BoardListPageUI
        CreateNew={CreateNewBoard}
        GoToDetail={GoToDetailPage}
        data={props.data}
        onChangeSearch={props.onChangeSearch}
      />
    </>
  );
}
