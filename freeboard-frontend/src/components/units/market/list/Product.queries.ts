import { gql } from "@apollo/client";

export const FETCH_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      contents
      remarks
      price
      images
    }
  }
`;
