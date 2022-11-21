import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import cicaLogo from "../assets/cica-logo.png";
import cicaLogoLaser from "../assets/cica-logo-laser.png";

export default function Navbar() {
  const [logo, setLogo] = useState(cicaLogo);
  return (
    <Navigation>
      <Logo>
        <img
          src={logo}
          alt="site logo"
          onMouseOver={() => {
            setLogo(cicaLogoLaser);
          }}
          onMouseOut={() => {
            setLogo(cicaLogo);
          }}
        />
      </Logo>
      <NavigationLinks>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/purchase">Purchase</NavigationLink>
        <NavigationLink to="/cart">Cart</NavigationLink>
        <NavigationLink to="/posts">Posts</NavigationLink>
        <NavigationLink to="/login">Login</NavigationLink>
      </NavigationLinks>
    </Navigation>
  );
}

const Navigation = styled.nav`
  height: 8rem;
  padding: 1rem;
  display: flex;
  background-color: gold;
`;
const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2ex;
`;
const NavigationLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
`;
const Logo = styled.div`
  max-width: 150px;
  margin-right: auto;
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
