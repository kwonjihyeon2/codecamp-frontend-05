import { ReactChild } from "react";
import SampleHeader from "./header/index";
import SampleBanner from "./banner/index";
import SampleNavi from "./navigation/index";
import Samplefooter from "./footer/index";
import styled from "@emotion/styled";

const SampleRow = styled.div`
  display: flex;
`;
const SampleSide = styled.div`
  width: 200px;
  height: 1000px;
  background-color: skyblue;
`;

const SampleBody = styled.div``;

interface IPropsSample {
  children: ReactChild;
}
export default function LayoutSample(props: IPropsSample) {
  return (
    <div>
      <SampleHeader />
      <SampleBanner />
      <SampleNavi />
      <SampleRow>
        <SampleSide />
        <SampleBody>{props.children}</SampleBody>
      </SampleRow>
      <Samplefooter />
    </div>
  );
}
