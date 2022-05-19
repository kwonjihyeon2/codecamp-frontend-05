import BestListPageUI from "./BestList.presenter";
import { useQuery } from "@apollo/client";
import { BEST_BOARDS, BEST_ITEMS } from "./BestList.queries";
import { IQuery } from "../../../../commons/types/generated/types";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";
import { useRouter } from "next/router";

export default function BestListPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(BEST_BOARDS);
  const { data: BestData } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(BEST_ITEMS);
  // console.log(BestData?.fetchUseditemsOfTheBest);

  const onClickBoard = (id: string) => () => {
    router.push(`boards/${id}`);
  };
  const onClickMarket = (id: string) => () => {
    router.push(`market/${id}`);
  };
  const { moveToPage } = MoveToPageHook();

  return (
    <BestListPageUI
      BestData={BestData}
      data={data}
      moveToPage={moveToPage}
      onClickBoard={onClickBoard}
      onClickMarket={onClickMarket}
    />
  );
}
