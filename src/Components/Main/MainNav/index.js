import React from "react";
import { GlobalFonts } from "../../../fonts/fonts";
import mainlogo from "../../../Images/logotest.svg";
import { Routes, Route } from "react-router-dom";
import SubPage from "../../Sub/SubPages/Pages"
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

const MainNav = () => {
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
            <NavBtnLink to="/sub">Join us</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
      <Routes>
        <Route path="/sub" element={<SubPage/>}/>
      </Routes>
    </>
  );
};

export default MainNav;
