import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project from "../../../Images/carousel.svg";

import {
  Container,
  TextWrapper,
  CarouselWrapper,
  Wrapper,
  Heading,
  Desc,
  StyledSlider,
  Project,
} from "./ProjectsElementes";
import { GlobalFonts } from "../../../fonts/fonts";

function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 0,
    arrow: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <GlobalFonts />
        <Wrapper>
          <TextWrapper>
            <Heading>Recent HWA-E Projects</Heading>
            <Desc>2022 1학기 제 1기 화이어의 프로젝트 입니다.</Desc>
          </TextWrapper>
          <CarouselWrapper>
            <StyledSlider {...settings}>
              <Project src={project} />
              <Project src={project} />
              <Project src={project} />
              <Project src={project} />
            </StyledSlider>
          </CarouselWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default Projects;
