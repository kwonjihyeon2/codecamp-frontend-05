export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };
  const onClickSaveLocal = () => {
    localStorage.setItem("localStorage", "local에 저장!");
  };
  const onClickSaveSession = () => {
    sessionStorage.setItem("sessionStorage", "session에 저장");
  };

  const onClickGetCookie = () => {
    // const aaa = document.cookie;
    //cookie에 있는 정보는 ;기준으로 모두 한꺼번에 조회됨 -> split으로 나눠서 가져오도록

    const aaa = document.cookie
      .split("; ") // ["aaa=철수", "zzz=맹구"]
      .filter((el) => el.startsWith("aaa="))[0]; //aaa=로 시작하는 요소만 => ["aaa=철수"]
    const result = aaa.replace("aaa=", ""); //요소(문자열이니까) 값만 가져오기위해
    console.log(result);
  };
  const onClickGetLocal = () => {
    const bbb = localStorage.getItem("localStorage");
    console.log(bbb);
  };
  const onClickGetSession = () => {
    const ccc = sessionStorage.getItem("sessionStorage");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키 저장</button>
      <button onClick={onClickSaveLocal}>로컬 저장</button>
      <button onClick={onClickSaveSession}>세션 저장</button>
      ==================
      <button onClick={onClickGetCookie}>쿠키 조회</button>
      <button onClick={onClickGetLocal}>로컬 조회</button>
      <button onClick={onClickGetSession}>세션 조회</button>
    </div>
  );
}
