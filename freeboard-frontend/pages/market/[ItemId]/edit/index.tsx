import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { withAuth } from "../../../../src/components/commons-components/hoc/withAuth";
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

export const EditUsedItem = () => {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_ITEM, {
    variables: { useditemId: `${router.query.ItemId}` },
  });

  return <CreateProductContainer isEdit={true} fetchItem={data} />;
};

export default withAuth(EditUsedItem);
