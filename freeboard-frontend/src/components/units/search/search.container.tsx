import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import { MoveToPageHook } from "../../commons-components/hooks/MoveToPageHook";
import SearchPageUI from "./search.presenter";
import { FETCH_BOARDS, FETCH_USED_ITEMS } from "./search.queries";

export default function RouterSearchPage() {
  const router = useRouter();
  const keyword = router.query.keyword;
  console.log(router.query);

  const { moveToPage } = MoveToPageHook();
  //test

  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      search: keyword,
      page: 1,
    },
  });
  const { data: fetchdata } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      search: keyword,
      page: 1,
    },
  });
  //   console.log(data, fetchdata);

  return (
    <SearchPageUI
      data={data}
      keyword={keyword}
      fetchdata={fetchdata}
      moveToPage={moveToPage}
    />
  );
}
