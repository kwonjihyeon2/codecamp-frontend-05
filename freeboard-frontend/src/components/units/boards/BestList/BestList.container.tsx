import BestListPageUI from "./BestList.presenter";
import { useQuery } from "@apollo/client";
import { BEST_BOARDS, BEST_ITEMS } from "./BestList.queries";
import { IQuery } from "../../../../commons/types/generated/types";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";

export default function BestListPage() {
  const { data } = useQuery(BEST_BOARDS);
  const { data: BestData } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(BEST_ITEMS);
  console.log(BestData?.fetchUseditemsOfTheBest);

  const { moveToPage } = MoveToPageHook();

  return (
    <BestListPageUI BestData={BestData} data={data} moveToPage={moveToPage} />
  );
}
