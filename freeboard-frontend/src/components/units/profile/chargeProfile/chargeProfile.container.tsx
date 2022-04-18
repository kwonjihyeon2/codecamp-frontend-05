import { useQuery, useMutation } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import ChargePageUI from "./chargeProfile.presenter";
import { FETCH_USER_INFO, IMP_UID } from "./chargeProfile.queries";
// import dotenv from "dotenv";

declare const window: typeof globalThis & {
  IMP: any;
};
// dotenv.config();

export default function ChargePageContainer() {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_INFO);

  const [amount, setAmount] = useState(0);
  const [changeMount, setChangeMount] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const onClickAmount = (number: number) => () => {
    setChangeMount(number);
    setAmount(number);
  };
  console.log(amount, "이건 change : " + changeMount);

  const [createPoint] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(IMP_UID);

  const onClickPayment = () => {
    setIsShow((prev) => !prev);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 가맹점 식별 코드

    // 결제창 호출 관련
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
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
        isShow={isShow}
      />
    </>
  );
}
