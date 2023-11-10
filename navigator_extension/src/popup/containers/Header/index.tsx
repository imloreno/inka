import React from "react";
import { ProfileInfo } from "../../components";
import Menu from "../Menu";

const Header = () => {
  return (
    <header>
      <ProfileInfo />
      <div className="">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
