import React, { useState } from "react";
import MainSide from "../MainSide";
import MainNav from "../MainNav";

const MainHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MainSide isOpen={isOpen} toggle={toggle} />
      <MainNav toggle={toggle} />
    </>
  );
};

export default MainHome;
