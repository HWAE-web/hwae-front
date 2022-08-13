import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: transparent;
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 999;
  width: 100%;
  padding: 0 24px;
  max-width: 1530px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #e02f36;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 0px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 30px;
  height: 100%;
  cursor: pointer;
  font-family: "Poppins Medium";
  font-size: 14px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #e02f36;
  }

  &.active {
    color: #e02f36;
  }
`;

export const NavBtn = styled.nav`
  margin-top: 5px;
  display: flex;
  width: 103px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #e02f36;
  white-space: nowrap;
  padding: 7.71px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 500;
  font-family: "Poppins Medium";

  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 1px solid #e02f36;
    color: #e02f36;
  }
`;
