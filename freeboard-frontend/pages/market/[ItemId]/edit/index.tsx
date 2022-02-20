import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import CreateProductContainer from "../../../../src/components/units/market/create/createProduct.container";

const FETCH_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      contents
      remarks
      price
    }
  }
`;

export default function EditUsedItem() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_ITEM, {
    variables: { useditemId: `${router.query.ItemId}` },
  });

  return <CreateProductContainer isEdit={true} fetchItem={data} />;
}
