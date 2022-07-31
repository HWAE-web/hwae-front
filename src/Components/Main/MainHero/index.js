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
} from "./HeroElements";
import { Button } from "./ButtonElemets";

import Image from "../../../Images/MainBG.png";
import MainText from "../../../Images/mainText.svg";
import LaptopImg from "../../../Images/laptop3d.svg";
import RRImg from "../../../Images/RR.svg";

const MainHero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id="home">
        <HeroBG>
          <ImageBg src={Image} />
        </HeroBG>
        <HeroGradation />
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
          <Laptop src={LaptopImg} />
          <RR to="about">
            <img src={RRImg} alt="down" />
          </RR>
        </HeroContents>
      </HeroContainer>
    </>
  );
};

export default MainHero;
