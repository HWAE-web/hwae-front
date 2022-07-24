import React from "react";
import { TbDots } from "react-icons/tb";
import mainlogo from "../../../Images/logotest.svg";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElement";

const MainNav = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <img src={mainlogo} alt="mainLogo"></img>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <TbDots />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="project">projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="recruit">recruit</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/joinus">Join Us</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default MainNav;
