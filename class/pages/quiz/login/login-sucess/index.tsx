import { useQuery, gql } from "@apollo/client";
import { IQuery } from "../../../../src/commons/types/generated/types";

const FETCH_USER = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function successPage() {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);

  return <div>{data?.fetchUserLoggedIn.name}님 로그인 성공</div>;
}
