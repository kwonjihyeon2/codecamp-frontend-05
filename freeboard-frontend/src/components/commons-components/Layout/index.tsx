import { ReactChild } from "react";
import styled from "@emotion/styled";
import LayOutDesignHead from "./header/index";
import LayOutDesignBanner from "./Banner/index";
import LayOutDesignNavi from "./navigation/index";
import LayOutDesignFooter from "./footer/index";
import { useRouter } from "next/router";
import { useState } from "react";

interface IPropsDesign {
  children: ReactChild;
}

const LayOutDesignBody = styled.div`
  width: 100%;
`;

const HIDDEN_HEADERS = ["/"];
const HIDDEN_BANNERS = ["/Login", "/Login/join", "/mypage"];

export default function LayOutDesign(props: IPropsDesign) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);

  const [openNavi, setOpenNavi] = useState(false);

  console.log(router.asPath);
  return (
    <div>
      {!isHiddenHeader && (
        <div>
          <LayOutDesignNavi openNavi={openNavi} />
          <LayOutDesignHead openNavi={openNavi} setOpenNavi={setOpenNavi} />
          {!isHiddenBanner && <LayOutDesignBanner />}
        </div>
      )}
      <LayOutDesignBody>{props.children}</LayOutDesignBody>
      {!isHiddenHeader && <LayOutDesignFooter />}
    </div>
  );
}
