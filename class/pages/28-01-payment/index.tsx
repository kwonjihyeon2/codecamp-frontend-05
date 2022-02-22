import { useState } from "react";
import Head from "next/head";

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);

  const onChangeAmount = (event) => {
    setAmount(Number(event.target.value));
  };

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000, 가맹점 식별 코드 넣는 곳

    //결제창 호출 관련
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", 상품ID는 중복불가 => 생략 시 자동생성됨
        name: "노르웨이 회전 의자",
        amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url : 모바일웹 결제 후 돌아갈 주소
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          console.log(rsp);
          // 1. 백엔드로 결제 관련 데이터 넘겨주기 => mutation 실행
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제 금액 : <input type="text" onChange={onChangeAmount} />
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}
