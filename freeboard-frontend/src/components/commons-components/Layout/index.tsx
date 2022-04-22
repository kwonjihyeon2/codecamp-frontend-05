import { ReactChild, useState } from "react";
import styled from "@emotion/styled";
import LayOutDesignHead from "./header/index";
import LayOutDesignBanner from "./Banner/index";
import LayOutDesignNavi from "./navigation/index";
import LayOutDesignFooter from "./footer/index";
import { useRouter } from "next/router";
import LayOutDesignSubBanner from "./communitybanner";
import LayOutDesignMainHead from "./mainHeader";

interface IPropsDesign {
  children: ReactChild;
}

const LayOutDesignBody = styled.div`
  width: 100%;
`;

const HIDDEN_HEADERS = ["/"];
const HIDDEN_MAIN = ["/mainpage"];
const HIDDEN_SUBBANNER = ["/boards", "/market"];
const HIDDEN_SEARCH = ["/search/[id]"];

export default function LayOutDesign(props: IPropsDesign) {
  const router = useRouter();

  const HIDDEN_BANNERS = [
    "/Login",
    "/Login/join",
    "/mypage",
    "/boards",
    "/market",
    `/market/${router.query.ItemId}`,
  ];

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenmain = HIDDEN_MAIN.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenSearch = HIDDEN_SEARCH.includes(router.pathname);
  const isHiddenSubBanner = HIDDEN_SUBBANNER.includes(router.asPath);

  const [openNavi, setOpenNavi] = useState(false);

  // console.log(router.pathname);

  return (
    <div>
      {!isHiddenHeader && (
        <div>
          <LayOutDesignNavi openNavi={openNavi} />
          {!isHiddenmain ? (
            <LayOutDesignHead openNavi={openNavi} setOpenNavi={setOpenNavi} />
          ) : (
            <LayOutDesignMainHead
              openNavi={openNavi}
              setOpenNavi={setOpenNavi}
            />
          )}
          {!isHiddenBanner || !isHiddenSearch ? <></> : <LayOutDesignBanner />}

          {isHiddenSubBanner && <LayOutDesignSubBanner />}
        </div>
      )}
      <LayOutDesignBody>{props.children}</LayOutDesignBody>
      {!isHiddenHeader && <LayOutDesignFooter />}
    </div>
  );
}
