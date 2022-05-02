import { gql } from "@apollo/client";

export const FETCH_IBOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      name
      remarks
      contents
      price
      images
      createdAt
    }
  }
`;
