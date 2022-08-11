import React from "react";
import { GlobalFonts } from "../../../fonts/fonts";
import mainlogo from "../../../Images/logotest.svg";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElement";

const SubNavBar = () => {
  return (
    <>
      <Nav>
        <GlobalFonts />
        <NavBarContainer>
          <NavLogo to="/">
            <img src={mainlogo} alt="mainLogo"></img>
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="subHome">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="process">Process</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="subRecruit">Recruit</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="faq">FAQ</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {/* <NavBtnLink to="/joinus">Join us</NavBtnLink> */}
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default SubNavBar;
