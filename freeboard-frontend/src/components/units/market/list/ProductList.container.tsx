import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import ItemListUI from "./ProductList.presenter";
import { FETCH_ITEMS } from "./Product.queries";
import { useEffect, useState } from "react";

export default function ItemList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_ITEMS);

  const [viewToday, setViewToday] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (setViewToday) setViewToday(baskets);
  }, []);

  const MoveToDetail = (el: IUseditem) => () => {
    router.push(`/market/${el._id}`);
    const cart = JSON.parse(localStorage.getItem("basket") || "[]");

    const { __typename, ...newArr } = el;
    cart.push(newArr);

    const reverse = cart.reverse();
    localStorage.setItem("basket", JSON.stringify(cart));
    if (setViewToday) setViewToday(reverse);
  };

  return (
    <ItemListUI fetchMore={fetchMore} MoveToDetail={MoveToDetail} data={data} />
  );
}
