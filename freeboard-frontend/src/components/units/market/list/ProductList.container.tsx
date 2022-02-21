import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import ItemListUI from "./ProductList.presenter";
import { FETCH_ITEMS } from "./Product.queries";
import { useContext, useEffect } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";

export default function ItemList() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_ITEMS);
  console.log(data);

  // const [cartToday, setCartToday] = useState([]);
  const { todayView, setTodayView } = useContext(MakeGlobalContext);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (setTodayView) setTodayView(baskets);
  }, []);

  const MoveToDetail = (el: IUseditem) => () => {
    router.push(`/market/${el._id}`);
    const cart = JSON.parse(localStorage.getItem("basket") || "[]");

    const { __typename, ...newArr } = el;
    cart.push(newArr);

    localStorage.setItem("basket", JSON.stringify(cart));
    if (setTodayView) setTodayView(cart);
  };

  return (
    <ItemListUI MoveToDetail={MoveToDetail} data={data} todayView={todayView} />
  );
}
