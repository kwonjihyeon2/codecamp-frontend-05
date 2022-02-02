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
  max-width: 1240px;
  width: 100%;
  margin: 50px auto;
`;

export default function LayOutDesign(props: IPropsDesign) {
  return (
    <div>
      <LayOutDesignNavi />
      <LayOutDesignHead />
      <LayOutDesignBanner />
      <LayOutDesignBody>{props.children}</LayOutDesignBody>
      <LayOutDesignFooter />
    </div>
  );
}
