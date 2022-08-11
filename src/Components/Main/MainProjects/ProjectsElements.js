import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Container = styled.div`
  color: #000;
  background: white;
  height: 100vh;
  display: flex;
  text-align: center;
  scroll-snap-align: start;
`;

export const Wrapper = styled.div`
  background-color: white;
  /* margin-top: 30%; */
  width: 70%;
  height: 65%;
  margin: auto;

  /* display: flex; */

  /* align-items: center; */
`;

export const TextWrapper = styled.div`
  /* font-feature-settings: "pnum" on, "lnum" on; */

  color: #333333;
`;

export const CarouselWrapper = styled.div`
  margin: 9% 0;
  @media screen and (max-width: 768px) {
    padding: 30% 0;
  }
`;

export const Heading = styled.div`
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  /* line-height: 64px; */

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-family: "Roboto Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 300%;
  color: #666666;
`;

export const StyledSlider = styled(Slider)`
  .slick-prev {
    left: -10px !important;
    z-index: 1000;
  }

  .slick-next {
    right: -10px !important;
    z-index: 1000;
    color: black !important;
  }

  .slick-prev:before {
    color: #e02f36 !important;
    /* background-color: #eee; */
  }
  .slick-next:before {
    color: #e02f36 !important;
    /* background-color: #eee; */
  }
`;

export const Project = styled.img`
  width: 300px !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
`;
