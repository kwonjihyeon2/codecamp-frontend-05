import { useQuery, useMutation } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import ChargePageUI from "./chargeProfile.presenter";
import { FETCH_USER_INFO, IMP_UID } from "./chargeProfile.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ChargePageContainer() {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_INFO);

  const [amount, setAmount] = useState(0);
  const [changeMount, setChangeMount] = useState(0);

  const onClickAmount = (number: number) => () => {
    setChangeMount(number);
    setAmount(number);
    console.log(number);
  };

  const [createPoint] = useMutation(IMP_UID);

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000, 가맹점 식별 코드 넣는 곳

    // 결제창 호출 관련
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", 상품ID는 중복불가 => 생략 시 자동생성됨
        name: "포인트 충전",
        amount,
        buyer_email: `${data?.fetchUserLoggedIn.email}`,
        buyer_name: `${data?.fetchUserLoggedIn.name}`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url : 모바일웹 결제 후 돌아갈 주소
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          console.log(rsp);
          try {
            await createPoint({
              variables: { impUid: rsp.imp_uid },
              refetchQueries: [{ query: FETCH_USER_INFO }],
            });
          } catch (error) {
            console.log(error.message);
          }
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
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
      <ChargePageUI
        onClickPayment={onClickPayment}
        data={data}
        changeMount={changeMount}
        onClickAmount={onClickAmount}
        amount={amount}
      />
    </>
  );
}
