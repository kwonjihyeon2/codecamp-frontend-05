import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_BEST_ITEMS } from "./Bestlist.queries";
import { v4 as uuidv4 } from "uuid";
import { handelError } from "../../../../commons/libraries/uitils";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 1024px;
  width: 100%;
`;
const WrapperList = styled.div`
  display: flex;
`;

const WrapperBox = styled.div`
  width: 25%;
`;

const CanclePrice = styled.span`
  text-decoration: line-through;
  color: #bdbdbd;
`;
const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  margin: 20px 0;
`;
const PriceRate = styled.span`
  font-size: 18px;
  letter-spacing: -1.5px;
  color: #fa622f;
  font-weight: 700;
  margin-right: 10px;
`;
const PriceName = styled.p`
  font-weight: 700;
  font-size: 1rem;
`;

export default function BestItemList() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_BEST_ITEMS);

  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>베스트 아이템</h1>
      <WrapperList>
        {data?.fetchUseditemsOfTheBest.map((el) => (
          <WrapperBox key={uuidv4()}>
            <ImgBox>
              <img
                style={{ width: "100%" }}
                onError={handelError}
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
              />
            </ImgBox>
            <PriceName>{el.name}</PriceName>
            <div>
              <PriceRate>15%</PriceRate>
              {el.price}원
            </div>
            <CanclePrice>{Math.ceil(Number(el.price) * 1.2)}원</CanclePrice>
          </WrapperBox>
        ))}
      </WrapperList>
    </Wrapper>
  );
}
