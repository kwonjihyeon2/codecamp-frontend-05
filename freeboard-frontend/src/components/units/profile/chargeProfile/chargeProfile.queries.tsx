import { gql } from "@apollo/client";

export const FETCH_USER_INFO = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
      createdAt
    }
  }
`;

export const IMP_UID = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
    }
  }
`;
