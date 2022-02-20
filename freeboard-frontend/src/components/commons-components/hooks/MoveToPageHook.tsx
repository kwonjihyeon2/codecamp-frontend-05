import { useRouter } from "next/router";

type IPage =
  | "/market"
  | "/boards"
  | "/mainpage"
  | `/market/${router.query.ItemId}/edit`;

export function MoveToPageHook() {
  const router = useRouter();

  const moveToPage = (page: IPage) => () => {
    router.push(page);
  };

  return { moveToPage };
}
