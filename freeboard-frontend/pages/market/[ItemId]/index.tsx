import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import ProductComment from "../../../src/components/units/market/comments/Product.comment.container";
import ItemDetailContainer from "../../../src/components/units/market/detail/productDetail.container";
import { FETCH_USED_ITEM } from "../../../src/components/units/market/detail/productDetail.queries";

export default function ItemDetailPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.ItemId) },
  });

  // if (loading) return "loading";
  // console.log(data?.fetchUseditem.useditemAddress?.address);

  return (
    <>
      <ItemDetailContainer data={data} />
      <ProductComment />
    </>
  );
}
