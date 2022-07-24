import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideLink,
  SideRoute,
  SideMenu,
  SideBtnWrap,
} from "./SideBarElement";
const MainSide = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideMenu>
          <SideLink to="Home" onClick={toggle}>
            Home
          </SideLink>
          <SideLink to="about" onClick={toggle}>
            about
          </SideLink>
          <SideLink to="projects" onClick={toggle}>
            projects
          </SideLink>
          <SideLink to="recruit" onClick={toggle}>
            recruit
          </SideLink>
        </SideMenu>
        <SideBtnWrap>
          <SideRoute to="/joinus">Join Us</SideRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default MainSide;
