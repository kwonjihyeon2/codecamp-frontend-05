import { gql } from "@apollo/client";

export const FETCH_CHARGE_LIST = gql`
  query fetchPointTransactionsOfLoading($page: Int) {
    fetchPointTransactionsOfLoading(page: $page) {
      _id
      impUid
      amount
      balance
    }
  }
`;
