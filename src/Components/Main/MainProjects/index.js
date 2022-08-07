import React from "react";
import { GlobalFonts } from "../../../fonts/fonts";
import SimpleSlider from "./ProjectsCarousel";

import {
  ProjcetsContainer,
  ProjectsWrapper,
  ProjectsHeading,
  ProjectsP,
  CarouselWrapper,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <>
      <ProjcetsContainer id="projects">
        <GlobalFonts />
        <ProjectsWrapper>
          <ProjectsHeading></ProjectsHeading>
          <ProjectsP></ProjectsP>
          <CarouselWrapper>
            <SimpleSlider />
          </CarouselWrapper>
        </ProjectsWrapper>
      </ProjcetsContainer>
    </>
  );
};

export default Projects;
