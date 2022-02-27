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

  const { data, loading } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.ItemId) },
  });
  console.log(data);

  return (
    <>
      <ItemDetailContainer data={data} loading={loading} />
      <ProductComment />
    </>
  );
}
