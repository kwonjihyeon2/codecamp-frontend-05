import { ReactChild, useState } from "react";
import styled from "@emotion/styled";
import LayOutDesignHead from "./header/index";
import LayOutDesignBanner from "./Banner/index";
import LayOutDesignNavi from "./navigation/index";
import LayOutDesignFooter from "./footer/index";
import { useRouter } from "next/router";
import LayOutDesignSubBanner from "./communitybanner";

interface IPropsDesign {
  children: ReactChild;
}

const LayOutDesignBody = styled.div`
  width: 100%;
`;

const HIDDEN_HEADERS = ["/"];
const HIDDEN_SUBBANNER = ["/boards", "/market"];

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
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenSubBanner = HIDDEN_SUBBANNER.includes(router.asPath);

  const [openNavi, setOpenNavi] = useState(false);

  console.log(router.asPath);

  return (
    <div>
      {!isHiddenHeader && (
        <div>
          <LayOutDesignNavi openNavi={openNavi} />
          <LayOutDesignHead openNavi={openNavi} setOpenNavi={setOpenNavi} />
          {!isHiddenBanner && <LayOutDesignBanner />}
          {isHiddenSubBanner && <LayOutDesignSubBanner />}
        </div>
      )}
      <LayOutDesignBody>{props.children}</LayOutDesignBody>
      {!isHiddenHeader && <LayOutDesignFooter />}
    </div>
  );
}
