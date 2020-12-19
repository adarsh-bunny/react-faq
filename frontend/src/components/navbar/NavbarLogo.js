import React from "react";
import { Link } from "react-router-dom";
import pic from "../../logo.jpeg";

const NavbarLogo = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <img src={pic} alt="" />
      </Link>
    </div>
  );
};

export default NavbarLogo;
