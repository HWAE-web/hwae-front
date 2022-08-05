import { Link } from "react-scroll";
import styled from "styled-components";

export const HeroContainer = styled.div`
  background: white;
  display: grid;

  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  scroll-snap-align: start;
  /* 
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  } */
`;

export const HeroBG = styled.div`
  /* z-index: -999; */
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

  display: grid;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  /* z-index: 0; */
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

export const Col1 = styled.div`
  margin-bottom: 15px;

  grid-area: col1;
  /* margin-top: 100px; */
`;
export const Col2 = styled.div`
  margin-bottom: 50px;
  display: flex;
  grid-area: col2;
`;

export const Col2Wrap = styled.div`
  max-width: 500px;
  padding-top: 0;
  display: flex;
`;

export const HeroRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  /* align-items: center; */
  grid-template-areas: "col1 col1 col1 col1 col1 col1 col2 col2 col2 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1 col1 col1 col1 col1 col1 col1 col1 col1" "col2 col2 col2 col2 col2 col2 col2 col2 col2 col2";
  }
`;

export const Wrapper = styled.div`
  display: grid;
  /* display: flex; */
  z-index: 1;
  height: 60%;
  width: 93%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5%;
  margin-bottom: auto;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainTextImg = styled.img`
  /* z-index: 999; */
  padding-top: 5%;
  padding-left: 10px;
  width: 95%;

  /* @media screen and (max-width: 1050px) {
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
    text-align: center;
  } */
`;

export const HeroContents = styled.div`
  z-index: 3;
  /* max-width: 1200px; */
  /* position: absolute; */
  /* bottom: 400px; */
  /* padding: 0 24px; */
  /* display: flex; */
  flex-direction: column;
`;

export const HeroText = styled.div``;

export const HeroP = styled.p`
  /* margin-top: 440px;
  margin-left: 10px; */
  margin-bottom: 60px;
  font-family: "Poppins Medium";
  color: #666666;
  font-size: 22px;
  max-width: 600px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const HeroBtnWrapper = styled.div`
  height: 44px;
  display: flex;
  /* align-items: center; */
  /* margin-top: 20px; */
  margin-left: 10px;
`;

export const LaptopWrap = styled.div`
  padding-top: 15%;
  /* padding-right: 10%; */
  z-index: 999;
  max-width: 600px;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Laptop = styled.img`
  width: 110%;
  filter: drop-shadow(12px 26px 43px rgba(0, 0, 0, 0.23));

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const RR = styled(Link)`
  cursor: pointer;
  margin-left: 47%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
