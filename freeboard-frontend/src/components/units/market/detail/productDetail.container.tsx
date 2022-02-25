import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import ItemDetailPageUI from "./productDetail.presenter";
import { DELETE_ITEM } from "./productDetail.queries";

export default function ItemDetailContainer(props) {
  const router = useRouter();
  // if (props.loading) return "loading";

  const { todayView, setTodayView } = useContext(MakeGlobalContext);
  const [deleteProduct] = useMutation(DELETE_ITEM);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (setTodayView) setTodayView(baskets);
  }, []);

  const onClickDeleteItem = async () => {
    try {
      await deleteProduct({
        variables: { useditemId: String(router.query.ItemId) },
      });

      console.log(router.query.ItemId);
      router.push("/market");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ItemDetailPageUI
      todayView={todayView}
      data={props.data}
      onClickDeleteItem={onClickDeleteItem}
    />
  );
}
