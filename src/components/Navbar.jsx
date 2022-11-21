import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import cicaLogo from "../assets/cica-logo.png";
import cicaLogoLaser from "../assets/cica-logo-laser.png";

export default function Navbar() {
  const [logo, setLogo] = useState(cicaLogo);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navigation>
      <NavigationBigDevice>
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
        <OpenClose onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? (
            <span class="material-symbols-outlined">close</span>
          ) : (
            <span class="material-symbols-outlined">menu</span>
          )}
        </OpenClose>
      </NavigationBigDevice>
      {isOpen && (
        <NavigationSmallDevice>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/purchase">Purchase</NavigationLink>
          <NavigationLink to="/cart">Cart</NavigationLink>
          <NavigationLink to="/posts">Posts</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink>
        </NavigationSmallDevice>
      )}
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: gold;
`;
const NavigationLinks = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    gap: 2ex;
  }
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
const NavigationBigDevice = styled.div`
  display: flex;
  height: 8rem;
  padding: 1rem;
`;
const NavigationSmallDevice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const OpenClose = styled.div`
  align-self: center;
  @media (min-width: 500px) {
    display: none;
  }
`;
