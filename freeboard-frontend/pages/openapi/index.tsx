import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled/";
import { v4 as uuidv4 } from "uuid";
import { FaExternalLinkAlt } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px;
`;

const WrapperBody = styled.div`
  max-width: 1240px;
  width: 100%;
`;

const WrapperContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const ContainerTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 700;
`;

const ContentsBox = styled.div`
  width: 23%;
  position: relative;
  margin: 0 20px 30px 0;
`;

const PosterBox = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  border-radius: 10px;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
const TitleBox = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const TitleText = styled.h4`
  font-size: 1rem;
  margin: 10px 0;
`;

const ContentsStyle = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.2;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const MoveLink = styled.div`
  position: absolute;
  top: 80%;
  right: 0;
  transform: translateY(-80%);
  margin-right: 10px;
  a {
    &:hover {
      color: #ff385c;
    }
  }
`;

export default function OpenApiPage() {
  const [List, setList] = useState<{ item: any[] }>();

  useEffect(() => {
    async function fetchFestival() {
      const result = await axios
        .get(
          //https://cors-anywhere.herokuapp.com/
          `http://api.kcisa.kr/openapi/service/rest/meta4/getKCPG0504?serviceKey=${process.env.NEXT_PUBLIC_CULTURE_KEY}`
        )
        .then((res) => res.data);
      setList(result.response.body.items);
    }
    fetchFestival();
  }, []);

  return (
    <Wrapper>
      <WrapperBody>
        <ContainerTitle>
          {List?.item[0].collectionDb}를 확인하세요
        </ContainerTitle>
        <WrapperContainer>
          {List?.item.map((el) => (
            <ContentsBox key={uuidv4()}>
              <PosterBox>
                <Poster src={`${el.referenceIdentifier}`} />
              </PosterBox>
              <TitleBox>
                <TitleText>{el.title}</TitleText>
              </TitleBox>
              <p style={{ margin: "5px 0" }}>위치 : {el.spatialCoverage}</p>
              <ContentsStyle>{el.description}</ContentsStyle>
              <MoveLink>
                <a href={`${el.url}`}>
                  <FaExternalLinkAlt />
                </a>
              </MoveLink>
            </ContentsBox>
          ))}
        </WrapperContainer>
      </WrapperBody>
    </Wrapper>
  );
}
