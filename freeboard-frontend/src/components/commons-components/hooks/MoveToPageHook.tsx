import { useRouter } from "next/router";

type IPage = "/market" | "/boards" | "/mainpage" | `/market/${string}/edit`;

export function MoveToPageHook() {
  const router = useRouter();

  const moveToPage = (page: IPage) => () => {
    router.push(page);
  };

  return { moveToPage };
}
