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
        <Logo to="/">
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
          <NavigationLink to="/">About</NavigationLink>
          <NavigationLink
            to="/purchase"
            fontcolor="var(--pink)"
            // dashedborder="2px dashed var(--pink)"
          >
            BUY ME STUFF
          </NavigationLink>
          <NavigationLink to="/posts">Posts</NavigationLink>{" "}
          <NavigationLink to="/login">Login</NavigationLink>
          <NavigationLink to="/cart" className="cart-link">
            Cart
            <span className="icons">
              <span className="material-symbols-outlined icon-cart">
                shopping_cart
              </span>
              <span className="item-count">99</span>
            </span>
          </NavigationLink>
        </NavigationLinks>
        <OpenClose onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
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
  position: relative;
  display: flex;
  flex-direction: column;
  /* background-color: var(--yellow); */
  /* box-shadow: 4px 2px 0px 4px var(--pink); */
  /* border: 10px dashed var(--blue); */
  margin: var(--vspace-3);
  border-bottom: 16px solid var(--blue);
`;
const NavigationLinks = styled.div`
  display: none;
  .cart-link {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 0.5em;
    span.icons {
      position: relative;
    }
    span.icon-cart {
      font-size: 1.5em;
      display: grid;
      place-content: center;
      transform: translateY(-2px);
    }
    span.item-count {
      color: var(--yellow);
      position: absolute;
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
      padding: 0.7rem;
      background-color: var(--blue);
      display: grid;
      place-content: center;
      border: 2px solid var(--yellow);
      border-radius: 50%;
      top: -1.1rem;
      right: -0.9rem;
    }
  }
  /* DISPLAY LINKS FOR BIG DEVICES */
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    gap: 2ex;
  }
`;
const NavigationLink = styled(Link)`
  color: ${props => props.fontcolor || "inherit"};
  border: ${props => props.dashedborder || "none"};
  text-decoration: none;
  padding: 0 var(--vspace-3);
  font-family: inherit;
  font-weight: 700;
  border-left: 1px solid var(--blue);
  &:visited,
  &:active {
    color: ${props => props.fontcolor || "inherit"};
  }
  &:hover:not(:last-child) {
    /* text-decoration: var(--blue) solid underline 1px; */
    color: var(--blue);
  }
`;
const Logo = styled(Link)`
  max-width: 150px;
  margin-right: auto;
  position: relative;

  img {
    top: 0;
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
  /* HIDE BUTTON && NAVIGATION EXTENSION FOR BIG DEVICES*/
  @media (min-width: 500px) {
    display: none;
  }
`;
const NavigationLinkCart = styled(Link)``;
