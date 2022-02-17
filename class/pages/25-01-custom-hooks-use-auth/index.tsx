import { useAuth } from "../../src/components/commons-components/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  const { isLoading } = useAuth();

  if (isLoading) return <></>;
  return (
    <div>
      <div>커스텀 훅 연습 페이지 - 권한 분기</div>
      <div>로그인 체크 완료 ! 환영합니다.</div>
    </div>
  );
}
