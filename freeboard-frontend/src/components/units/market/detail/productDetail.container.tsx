import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItemDetailPageUI from "./productDetail.presenter";
import {
  DELETE_ITEM,
  BUY_ITEM,
  PICK_ITEMS,
  FETCH_PICKED,
} from "./productDetail.queries";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { IPropsType } from "./productDetail.types";

export default function ItemDetailContainer(props: IPropsType) {
  const router = useRouter();

  const [todayView, setTodayView] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (setTodayView) setTodayView(baskets);
  }, []);

  const onClickMoveItem = (_id: string) => () => {
    router.push(`/market/${_id}`);
  };

  const [deleteProduct] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_ITEM);

  const onClickDeleteItem = async () => {
    try {
      await deleteProduct({
        variables: { useditemId: String(router.query.ItemId) },
      });
      // console.log(router.query.ItemId);
      router.push("/market");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [createPointBuyAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(BUY_ITEM);

  const onClickBuyItem = async () => {
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

  const { data: PickedData } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_PICKED, {
    variables: {
      page: 1,
      search: "",
    },
  });
  const [picked, setPicked] = useState(true);
  const [toggleItemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(PICK_ITEMS);

  const onClickPicked = (el: string | undefined) => async () => {
    try {
      const pickResult = await toggleItemPick({
        variables: {
          useditemId: String(el),
        },
      });
      setPicked((prev) => !prev);
      // console.log(pickResult);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const pick = PickedData?.fetchUseditemsIPicked.filter(
      (el: any) => el._id === props.data?.fetchUseditem._id
    );

    if (pick?.length) {
      setPicked(false);
    }
  }, [PickedData, props.data]);

  const onClickBasket = async () => {
    let el: IUseditem = props.data?.fetchUseditem;
    const todayBasket = JSON.parse(localStorage.getItem("todayBasket") || "[]");

    const temp = todayBasket.filter(
      (basketEl: IUseditem) => basketEl._id === el._id
    );
    if (temp.length === 1) {
      Modal.error({
        content: "이미 담으신 물품입니다",
      });
      return;
    }

    const { __typename, useditemAddress, contents, ...newEl } = el;
    todayBasket.push(newEl);

    localStorage.setItem("todayBasket", JSON.stringify(todayBasket));
    Modal.success({ content: "상품이 장바구니에 담겼습니다." });
  };

  return (
    <ItemDetailPageUI
      onClickPicked={onClickPicked}
      picked={picked}
      PickedData={PickedData}
      todayView={todayView}
      data={props.data}
      onClickDeleteItem={onClickDeleteItem}
      onClickBuyItem={onClickBuyItem}
      onClickMoveItem={onClickMoveItem}
      onClickBasket={onClickBasket}
    />
  );
}
