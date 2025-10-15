import { useMediaQuery } from "@mui/material";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:920px)");
  return (
    <>
      {isMobile ? (
        <>
          <HeaderMobile></HeaderMobile>
        </>
      ) : (
        <HeaderDesktop></HeaderDesktop>
      )}
    </>
  );
};
