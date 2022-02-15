import BoardListPageUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent } from "react";

interface IPropsList {
  data: any;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  dataBoardsCount: any;
  search: string;
}

export default function BoardListPage(props: IPropsList) {
  const router = useRouter();

  const CreateNewBoard = () => {
    router.push("/boards/new");
  };
  // 클릭했을때 상세페이지로 가는 것 props onclick으로 연결

  const GoToDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget instanceof Element)
      console.log(event.currentTarget.id);
    if (event.currentTarget instanceof Element)
      router.push(`boards/${event.currentTarget.id}`);
  };

  return (
    <>
      <BoardListPageUI
        CreateNew={CreateNewBoard}
        GoToDetail={GoToDetailPage}
        data={props.data}
        onChangeSearch={props.onChangeSearch}
        dataBoardsCount={props.dataBoardsCount}
        search={props.search}
      />
    </>
  );
}
