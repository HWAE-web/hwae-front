import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  MainRecruitContainer,
  MainRecruitBg,
  ImgBg,
  MainRecruitWrapper,
  LaptopImg,
  MainRHeading,
  MainRP,
  ButtonWrapper,
} from "./MainRecruitElements";

import { Button } from "../MainHero/ButtonElemets";
import SubPage from "../../Sub/SubPages/Pages";
import MainRBg from "../../../Images/recruitBg.png";
import laptopImg from "../../../Images/recruitpage.svg";
import { GlobalFonts } from "../../../fonts/fonts";

const MainRecruit = () => {
  let navigate = useNavigate();
  return (
    <>
      <MainRecruitContainer id="recruit">
        <GlobalFonts />
        <MainRecruitBg>
          <ImgBg src={MainRBg} />
        </MainRecruitBg>
        <MainRecruitWrapper>
          <LaptopImg src={laptopImg} />
          <MainRHeading>
            HWA-E <br /> Recruitment
          </MainRHeading>
          <MainRP>
            HWA-E에서 이야기를 함께 만들어 갈 <br /> HWA-E의 2번째 기수 신입
            동아리원을 뽑습니다.
          </MainRP>
          <ButtonWrapper>
            <Button onClick={() => navigate("/sub")}>Join HWA-E</Button>
          </ButtonWrapper>
        </MainRecruitWrapper>
      </MainRecruitContainer>
      <Routes>
        <Route path="/sub" element={<SubPage/>}/>
      </Routes>
    </>
  );
};

export default MainRecruit;
