import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient(
      `${process.env.NEXT_PUBLIC_APOLLO_URI}`,
      { credentials: "include" }
    );
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    console.log(error.message);
    //여기서 문제 ? 리프레시토큰이 만료가됐거나,, 그런 토큰문제
  }
}
