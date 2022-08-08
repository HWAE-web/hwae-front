import React from "react";
import { GlobalFonts } from "../../../fonts/fonts";
import Home from "../HomePage/Home";
import Process from "../ProcessPage/Process";
import FAQ from "../FAQPage/FAQ";
import Recruit from "../RecruitPage/Recruit";

import SubNavBar from "../NavBar/NavBar";
import { PageContainer } from "./PagesElement";
import { ProcessData } from "../ProcessPage/ProcessData";

const SubPage = () => {
  return (
    <PageContainer>
      <GlobalFonts />
      <SubNavBar />
      <Home />
      <Process {...ProcessData}/>
      <Recruit/>
      {/* <FAQ /> */}
    </PageContainer>
  );
};

export default SubPage;
