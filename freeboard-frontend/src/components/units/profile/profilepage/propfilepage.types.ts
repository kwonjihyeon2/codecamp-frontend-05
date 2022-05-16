import { IQuery } from "../../../../commons/types/generated/types";

export interface propfilType {
  listIndex: number;
  listArr: {
    index: number;
    contents: JSX.Element;
  }[];
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickMove: (id: number) => () => void;
  IpickData: Pick<IQuery, "fetchUseditemsCountIPicked"> | undefined;
}
