import React from "react";
import { GlobalFonts } from "../../../fonts/fonts";
import MainHero from "../MainHero";
import MainInfo from "../MainInfo";
import { AboutHWAE } from "../MainInfo/Data";
import MainNav from "../MainNav";
import MainRecruit from "../MainRecruit";
import { PageContainer } from "./PageElements";

const MainHome = () => {
  return (
    <PageContainer>
      <GlobalFonts />
      <MainNav />
      <MainHero />
      <MainInfo {...AboutHWAE} />
      {/* <MainInfo {...AboutWEB} /> */}
      {/* <MainTeam /> */}
      <MainRecruit />
    </PageContainer>
  );
};

export default MainHome;
