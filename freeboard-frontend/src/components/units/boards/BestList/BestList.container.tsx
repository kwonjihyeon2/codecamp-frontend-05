import BestListPageUI from "./BestList.presenter";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const BEST_BOARDS = gql`
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

export default function BestListPage() {
  const { data } = useQuery(BEST_BOARDS);

  const router = useRouter();
  const MoveToAll = () => {
    router.push("/boards");
  };

  return <BestListPageUI data={data} MoveToAll={MoveToAll} />;
}
