import { useState } from "react";
import * as P from "./profilepage.style";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_IPICKED_COUNT, FETCH_USER_LOGGED_IN } from "./profilepage.query";
import SoldItemContainer from "../soldItem-list/soldItem.container";
import BuyListContainer from "../buyItem-list/buyItemlist.container";
import ChargeListContainer from "../charge-list/chargelist.container";
import ProfilepageUI from "./propfilepage.presenter";

export default function ProfileContainer() {
  const [listIndex, setListIndex] = useState<number>(0);
  const listArr = [
    { index: 0, contents: <BuyListContainer /> },
    { index: 1, contents: <SoldItemContainer /> },
    { index: 2, contents: <ChargeListContainer /> },
  ];

  const onClickMove = (id: number) => () => {
    setListIndex(id);
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data: IpickData } =
    useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(FETCH_IPICKED_COUNT);

  return (
    <ProfilepageUI
      listIndex={listIndex}
      listArr={listArr}
      data={data}
      onClickMove={onClickMove}
      IpickData={IpickData}
    />
  );
}
