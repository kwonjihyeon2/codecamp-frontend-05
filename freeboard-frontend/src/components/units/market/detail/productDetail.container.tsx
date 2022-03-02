import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { MakeGlobalContext } from "../../../../../pages/_app";
import ItemDetailPageUI from "./productDetail.presenter";
import {
  DELETE_ITEM,
  BUY_ITEM,
  PICK_ITEMS,
  FETCH_PICKED_COUNT,
  FETCH_PICKED,
} from "./productDetail.queries";
import { Modal } from "antd";

export default function ItemDetailContainer(props) {
  const router = useRouter();
  // if (props.loading) return "loading";

  const { todayView, setTodayView } = useContext(MakeGlobalContext);
  const [deleteProduct] = useMutation(DELETE_ITEM);

  // useEffect(() => {
  //   const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
  //   if (setTodayView) setTodayView(baskets);
  // }, []);

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

  const [createPointBuyAndSelling] = useMutation(BUY_ITEM);

  const onClickBuyItem = async () => {
    console.log(111);
    try {
      const result = await createPointBuyAndSelling({
        variables: {
          useritemId: `${router.query.ItemId}`,
        },
        refetchQueries: [],
      });
      console.log(result);
      Modal.success({
        content: "구매 성공 !",
      });
      router.push("/market");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data: PickedData } = useQuery(FETCH_PICKED, {
    variables: {
      page: 1,
      search: "",
    },
  });
  const [picked, setPicked] = useState(true);
  const [toggleItemPick] = useMutation(PICK_ITEMS);

  const onClickPicked = (el) => async () => {
    try {
      const pickResult = await toggleItemPick({
        variables: {
          useditemId: String(el),
        },
      });
      setPicked((prev) => !prev);
      console.log(pickResult);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(PickedData);

  useEffect(() => {
    const pick = PickedData?.fetchUseditemsIPicked.filter(
      (el) => el._id === props.data?.fetchUseditem._id
    );
    // console.log("===================");
    console.log(props.data?.fetchUseditem._id, pick?.length);

    if (pick?.length) {
      setPicked(false);
    }
  }, [PickedData, props.data]);

  return (
    <ItemDetailPageUI
      onClickPicked={onClickPicked}
      setPicked={setPicked}
      picked={picked}
      PickedData={PickedData}
      todayView={todayView}
      data={props.data}
      onClickDeleteItem={onClickDeleteItem}
      onClickBuyItem={onClickBuyItem}
    />
  );
}
