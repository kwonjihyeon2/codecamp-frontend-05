import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      userPoint
      createdAt
    }
  }
`;

export function useFetchUserInfoHook() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return data;
}
