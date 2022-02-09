import { ReactChild } from "react";
import styled from "@emotion/styled";
import LayOutDesignHead from "./header/index";
import LayOutDesignBanner from "./Banner/index";
import LayOutDesignNavi from "./navigation/index";
import LayOutDesignFooter from "./footer/index";
import { useRouter } from "next/router";

interface IPropsDesign {
  children: ReactChild;
}

const LayOutDesignBody = styled.div``;

const HIDDEN_HEADERS = ["/"];

export default function LayOutDesign(props: IPropsDesign) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  console.log(router.asPath);
  return (
    <div>
      {!isHiddenHeader && (
        <div>
          <LayOutDesignNavi />
          <LayOutDesignHead />
          <LayOutDesignBanner />
        </div>
      )}
      <LayOutDesignBody>{props.children}</LayOutDesignBody>
      {!isHiddenHeader && <LayOutDesignFooter />}
    </div>
  );
}