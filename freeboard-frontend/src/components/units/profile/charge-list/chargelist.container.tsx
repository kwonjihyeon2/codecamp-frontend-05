import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_CHARGE_LIST } from "./chargelist.queries";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

const ChargeBox = styled.div`
  width: 100%;
`;

const ChargeUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin: 0;
  border-bottom: 1px solid #e9e9e9;
`;

export default function ChargeListContainer() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_CHARGE_LIST);
  console.log(data?.fetchPointTransactionsOfLoading);

  return (
    <div>
      <h1>포인트 충전내역</h1>
      <ChargeBox>
        <div>
          <ChargeUl>
            <li>번호</li>
            <li>결제 ID</li>
            <li>충전 금액</li>
            <li>잔액</li>
          </ChargeUl>
        </div>
        <div>
          {data?.fetchPointTransactionsOfLoading.map((el, index) => (
            <ChargeUl key={uuidv4()}>
              <li>{index + 1}</li>
              <li>{el.impUid}</li>
              <li>{el.amount}</li>
              <li>{el.balance}</li>
            </ChargeUl>
          ))}
        </div>
      </ChargeBox>
    </div>
  );
}
