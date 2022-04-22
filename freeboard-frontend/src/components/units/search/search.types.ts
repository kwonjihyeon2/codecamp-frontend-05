import { IQuery } from "../../../commons/types/generated/types";
// import { IPage } from "../../commons-components/hooks/MoveToPageHook";

export interface IPropsSearch {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  fetchdata: Pick<IQuery, "fetchUseditems"> | undefined;
  keyword?: string;
  moveToPage: (page: any) => () => void;
}
