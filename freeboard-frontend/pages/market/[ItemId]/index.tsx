import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { withAuth } from "../../../src/components/commons-components/hoc/withAuth";
import ProductComment from "../../../src/components/units/market/comments/Product.comment.container";
import ItemDetailContainer from "../../../src/components/units/market/detail/productDetail.container";
import { FETCH_USED_ITEM } from "../../../src/components/units/market/detail/productDetail.queries";

export const ItemDetailPage = () => {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.ItemId) },
  });
  console.log(data);
  // if (loading) return "loading";

  return (
    <>
      <ItemDetailContainer data={data} />
      <ProductComment />
    </>
  );
};

export default withAuth(ItemDetailPage);
