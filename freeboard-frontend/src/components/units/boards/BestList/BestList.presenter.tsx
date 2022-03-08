import { v4 as uuidv4 } from "uuid";
import { getMyDate } from "../../../../commons/libraries/uitils";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 30px auto;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 50px 0;
`;

const BestImg = styled.img`
  width: 100%;
  border-radius: 10px;
  /* @media (max-width: 1240px) {
    width: 100%;
  } */
`;

const TitleText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2;
`;

const ViewAll = styled.p`
  color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  cursor: pointer;
`;

const TitleFont = styled.p`
  margin: 20px 0 0 0;
`;

const ContentStyle = styled.h2`
  margin: 10px 0;
  /* font-size: 40px; / */
  font-weight: 700;
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DayTitle = styled.p`
  margin: 0;
  font-size: 12px;
  color: #bdbdbd;
`;

interface IPropsData {
  data: any;
  moveToPage: (page) => () => void;
  BestData: any;
}

export default function BestListPageUI(props: IPropsData) {
  return (
    <Wrapper>
      <TitleBox>
        <TitleText>흥미로운 아이디어 둘러보기</TitleText>
        <ViewAll onClick={props.moveToPage("/boards")}>전체보기</ViewAll>
      </TitleBox>
      <WrapperList>
        {props.data?.fetchBoardsOfTheBest.map((el: any) => (
          <div key={uuidv4()}>
            <div style={{ height: "35vh" }}>
              <BestImg
                style={{ width: "18.5rem", height: "100%", objectFit: "cover" }}
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/basic.jpeg"
                }
              />
            </div>
            <TitleFont>{el.title}</TitleFont>
            <ContentStyle>{el.contents}</ContentStyle>
            <DayTitle>{el.writer}</DayTitle>
            <DayTitle>{getMyDate(el.updatedAt)}</DayTitle>
          </div>
        ))}
      </WrapperList>
      <TitleBox>
        <TitleText>합리적인 소비를 위한 추천</TitleText>
        <ViewAll onClick={props.moveToPage("/market")}>전체보기</ViewAll>
      </TitleBox>
      <WrapperList>
        {props.BestData?.fetchUseditemsOfTheBest.map((el: any) => (
          <div key={uuidv4()}>
            <div style={{ height: "35vh" }}>
              <BestImg
                style={{
                  width: "18.5rem",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/basic.jpeg"
                }
              />
            </div>
            <TitleFont>{el.name}</TitleFont>
            <ContentStyle>{el.remarks}</ContentStyle>
            <DayTitle>{el.price}원</DayTitle>
            <DayTitle>{getMyDate(el.updatedAt)}</DayTitle>
          </div>
        ))}
      </WrapperList>
    </Wrapper>
  );
}
