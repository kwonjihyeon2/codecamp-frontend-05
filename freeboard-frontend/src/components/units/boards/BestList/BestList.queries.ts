import { gql } from "@apollo/client";

export const BEST_BOARDS = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      images
      updatedAt
    }
  }
`;

export const BEST_ITEMS = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      images
      updatedAt
    }
  }
`;
