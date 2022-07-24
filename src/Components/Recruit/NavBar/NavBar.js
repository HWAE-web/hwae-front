import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  // 마우스 윗부분에 올리면 네비게이션바 뜨는 기능 구현해야 함! 근데 어려움
  return (
    <div>
      <NavBarContents />
    </div>
  );
}

function NavBarContents() {
  return (
    <div className="sub-nav-bg">
      <span className="sub-nav-home">Home</span>
      <span className="sub-nav-process">process</span>
      <span className="sub-nav-FAQ">FAQ</span>
      <span className="sub-nav-recruit">recruit</span>
      <div className="sub-nav-btn">Log in</div>
    </div>
  );
}
export default NavBar;
