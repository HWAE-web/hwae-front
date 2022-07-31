import { Link } from "react-scroll";
import styled from "styled-components";

export const HeroContainer = styled.div`
  background: white;
  display: flex;

  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  scroll-snap-align: start;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  }
`;

export const HeroBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroGradation = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px;
  gap: 8px;

  position: absolute;
  left: 3.59%;
  right: 3.59%;
  top: 9.54%;
  bottom: 3.89%;

  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 0px 12px 52px 8px rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(46px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 48px;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainTextImg = styled.img`
  position: absolute;
  width: 850px;
  height: 240px;
  left: 100px;
  top: 220px;

  @media screen and (max-width: 1050px) {
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const HeroContents = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  bottom: 400px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

export const HeroText = styled.div``;

export const HeroP = styled.p`
  margin-top: 440px;
  margin-left: 76px;
  margin-bottom: 60px;
  font-family: "Poppins Medium";
  color: #666666;
  font-size: 22px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    text-align: center;
    align-items: center;
  }
`;

export const HeroBtnWrapper = styled.div`
  height: 44px;
  display: flex;
  margin-left: 72px;
  align-items: center;
`;

export const Laptop = styled.img`
  width: 140%;
  position: absolute;

  left: 820px;
  top: 170px;
`;

export const RR = styled(Link)`
  cursor: pointer;
  position: absolute;
  left: 800px;
  top: 880px;
`;
