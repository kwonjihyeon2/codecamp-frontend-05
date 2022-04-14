import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export interface IPropsList {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  MoveToDetail: (el: IUseditem) => () => void;
  fetchMore: Pick<IQuery, "fetchUseditems"> | any;
}
