import React from "react";
import styled from "styled-components";
import logo from "assets/icons/logo.png";

const StyledLogo = styled.div`
  box-sizing: border-box;
  display: inline-block;
  max-height: 100%;
  margin-right: auto;
  cursor: pointer;
  img {
    width: 120px;
    height: 120px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <a href="/">
        <img alt="logo" src={logo} />
      </a>
    </StyledLogo>
  );
};

export default Logo;
