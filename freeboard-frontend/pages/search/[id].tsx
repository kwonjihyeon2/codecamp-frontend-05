import { useRouter } from "next/router";

export default function RouterSearch() {
  const router = useRouter();
  const keyword = router.query.keyword;
  console.log(router.query);

  return (
    <div style={{ width: "100%", padding: "400px 0" }}>
      <div>
        <div>
          <div>
            <span>"{keyword}"</span>에 대한 검색 결과
          </div>
        </div>
      </div>
    </div>
  );
}
