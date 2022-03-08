import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_BEST_ITEMS } from "./Bestlist.queries";
import { v4 as uuidv4 } from "uuid";
import { handelError } from "../../../../commons/libraries/uitils";
import styled from "@emotion/styled";
import { FaChevronRight } from "react-icons/fa";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";

const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
`;
const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

const WrapperTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  /* justify-content: center; */
  text-align: center;
`;

const TitleSpan = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 1.25rem;
`;

const WrapperBox = styled.div`
  width: 23%;
  cursor: pointer;
`;

const CanclePrice = styled.span`
  text-decoration: line-through;
  color: #bdbdbd;
`;
const ImgBox = styled.div`
  width: 100%;
  height: 40vh;
`;

const ListImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  margin: 10px 0;
`;

export default function BestItemList() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_BEST_ITEMS);

  const { moveToPage } = MoveToPageHook();

  return (
    <Wrapper>
      <WrapperTitle>
        이런 상품은 어때요?{" "}
        <TitleSpan>
          <FaChevronRight />
        </TitleSpan>
      </WrapperTitle>
      <WrapperList>
        {data?.fetchUseditemsOfTheBest.map((el) => (
          <WrapperBox key={uuidv4()} onClick={moveToPage(`/market/${el._id}`)}>
            <ImgBox>
              <ListImg
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
