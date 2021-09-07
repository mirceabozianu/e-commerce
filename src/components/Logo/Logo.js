import React from "react";
import { StyledLogo } from "../../styled/StyledLogo";
import logo from "../../assets/logo1.png";

const Logo = () => {
  return (
    <StyledLogo>
      <img alt="logo" src={logo} />
    </StyledLogo>
  );
};

export default Logo;
