import React from "react";
import { useState } from "react";
import {
  HeroContainer,
  HeroBG,
  ImageBg,
  HeroContents,
  HeroText,
  HeroP,
  HeroBtnWrapper,
  HeroGradation,
  MainTextImg,
  Laptop,
  RR,
  Col1,
  Col2,
  Col2Wrap,
  LaptopWrap,
  HeroRow,
  Wrapper,
} from "./HeroElements";
import { Button } from "./ButtonElemets";

import Image from "../../../Images/MainBG.png";
import MainText from "../../../Images/mainText.svg";
import LaptopImg from "../../../Images/laptop3d.svg";
import RRImg from "../../../Images/RR.svg";
import { GlobalFonts } from "../../../fonts/fonts";

const MainHero = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };
  return (
    <>
      <HeroContainer id="home">
        <GlobalFonts />
        <HeroBG>
          <ImageBg src={Image} />
        </HeroBG>
        <HeroGradation>
          <Wrapper>
            <HeroRow>
              <Col1>
                <HeroContents>
                  <HeroText>
                    <MainTextImg src={MainText} />
                  </HeroText>
                  <HeroP>Hybrid Web&App projects in EWHA</HeroP>
                  <HeroBtnWrapper>
                    <Button
                      to="signup"
                      // onMouseEnter={onHover}
                      // onMouseLeave={onHover}
                      // primary="true"
                      // dark="true"
                    >
                      About us
                    </Button>
                  </HeroBtnWrapper>
                </HeroContents>
              </Col1>
              <Col2>
                <Col2Wrap>
                  <Laptop src={LaptopImg} />
                </Col2Wrap>
              </Col2>
            </HeroRow>

            <RR to="about">
              <img src={RRImg} alt="down" />
            </RR>
          </Wrapper>
        </HeroGradation>
      </HeroContainer>
    </>
  );
};

export default MainHero;
