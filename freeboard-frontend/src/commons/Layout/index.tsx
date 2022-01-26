import { ReactChild } from "react";
import styled from "@emotion/styled";
import LayOutDesignHead from "./header/index";
import LayOutDesignBanner from "./Banner/index";
import LayOutDesignNavi from "./navigation/index";
import LayOutDesignFooter from "./footer/index";

interface IPropsDesign {
  children: ReactChild;
}

const LayOutDesignBody = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export default function LayOutDesign(props: IPropsDesign) {
  return (
    <div>
      <LayOutDesignHead />
      <LayOutDesignNavi />
      <LayOutDesignBanner />
      <LayOutDesignBody>{props.children}</LayOutDesignBody>
      <LayOutDesignFooter />
    </div>
  );
}
