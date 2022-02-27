import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import Head from "next/head";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../src/commons/types/generated/types";

declare const window: typeof globalThis & {
  IMP: any;
};

const FETCH_USER_INFO = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
      createdAt
    }
  }
`;

const IMP_UID = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
    }
  }
`;

interface IMountColor {
  changeMount: number;
}

const ButtonColor = styled.button`
  border: 1px solid
    ${(props: IMountColor) =>
      props.changeMount === props.amount ? "blue" : "none"};
`;

export default function MyPage() {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_INFO);

  const [amount, setAmount] = useState(0);
  const [changeMount, setChangeMount] = useState(0);

  const onClickAmount = (number) => () => {
    setChangeMount(Number(number));
    setAmount(Number(number));
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
        name: "노르웨이 회전 의자",
        amount,
        buyer_email: `${data?.fetchUserLoggedIn.email}`,
        buyer_name: `${data?.fetchUserLoggedIn.name}`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url : 모바일웹 결제 후 돌아갈 주소
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          console.log(rsp);
          // 1. 백엔드로 결제 관련 데이터 넘겨주기 => mutation 실행

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
      <div>
        <div>
          <p>{data?.fetchUserLoggedIn.name}</p>
          포인트 : {data?.fetchUserLoggedIn.userPoint?.amount}
        </div>
        <button onClick={onClickPayment}>충전하기</button>

        <ButtonColor changeMount={changeMount} onClick={onClickAmount(100)}>
          100
        </ButtonColor>
        <ButtonColor changeMount={changeMount} onClick={onClickAmount(20000)}>
          20000
        </ButtonColor>
        <ButtonColor changeMount={changeMount} onClick={onClickAmount(30000)}>
          30000
        </ButtonColor>
        <ButtonColor changeMount={changeMount} onClick={onClickAmount(40000)}>
          40000
        </ButtonColor>
        <ButtonColor changeMount={changeMount} onClick={onClickAmount(50000)}>
          50000
        </ButtonColor>
      </div>
    </>
  );
}
