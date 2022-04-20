import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import Head from "next/head";
import { ChangeEvent, useRef } from "react";
import { useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IMutationUpdateUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import ChargePageUI from "./chargeProfile.presenter";
import { FETCH_USER_INFO, IMP_UID, UPDATE_USER } from "./chargeProfile.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ChargePageContainer() {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_INFO);

  const [amount, setAmount] = useState(0);
  const onClickAmount = (el: number) => () => {
    setAmount(el);
  };
  // console.log(amount);

  const [createPoint] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(IMP_UID);

  const onClickPayment = () => {
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
            Modal.success({
              content: "포인트가 충전되었습니다 !",
            });
          } catch (error) {
            console.log(error.message);
          }
        } else {
          // 결제 실패 시 로직,
          Modal.error({
            title: "포인트 충전 실패",
            content: rsp.error_msg + " 결제를 다시 진행해주세요.",
          });
        }
      }
    );
  };

  //updateUser
  const [name, setName] = useState(`${data?.fetchUserLoggedIn.name}`);
  const [picture, setPicture] = useState(`${data?.fetchUserLoggedIn.picture}`);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangefile = (file: string) => {
    setPicture(file);
  };

  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  interface IMyVariables {
    name?: string;
    picture?: string;
  }

  const myvariables: IMyVariables = {};
  if (name) myvariables.name = name;
  if (picture) myvariables.picture = picture;
  console.log(myvariables);

  const onClickEdit = async () => {
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: myvariables,
        },
      });
      console.log(result);
      Modal.success({
        content: "회원정보 수정이 완료되었습니다.",
      });
    } catch (error) {
      console.log(error.message);
    }
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
        onClickAmount={onClickAmount}
        amount={amount}
        onChangeName={onChangeName}
        onClickEdit={onClickEdit}
        onChangefile={onChangefile}
        picture={picture}
      />
    </>
  );
}
