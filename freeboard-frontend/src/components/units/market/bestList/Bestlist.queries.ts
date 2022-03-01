import { gql } from "@apollo/client";

export const FETCH_BEST_ITEMS = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      images
      price
    }
  }
`;
