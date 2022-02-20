import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      contents
      remarks
      price
      images
      tags
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput) {
      _id
      name
      contents
      price
      images
      remarks
    }
  }
`;
