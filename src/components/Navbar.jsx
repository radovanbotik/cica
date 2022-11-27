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
          {/* <div className="logo-control">
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
          </div> */}
          <span>urban cat.</span>
        </Logo>
        <NavigationLinks>
          <NavigationLink to="/">About</NavigationLink>
          <NavigationLink
            to="/purchase"
            fontcolor="var(--pink)"
            // dashedborder="2px dashed var(--pink)"
          >
            BUY MY STUFF
          </NavigationLink>
          {/* <NavigationLink to="/posts">Posts</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink> */}
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
  padding: var(--vspace-3);
  margin: var(--vspace-3);
  /* border-bottom: 16px solid var(--blue); */
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
  font-family: var(--nunito);
  font-weight: 800;
  @media (min-width: 500px) {
    border-left: 1px solid var(--blue);
  }
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
  margin-right: auto;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: var(--futura);
  text-transform: uppercase;
  letter-spacing: -1px;
  color: inherit;
  font-weight: 800;
  font-size: 2rem;
  white-space: nowrap;
  .logo-control {
    /* max-width: 150px; */
    width: 80px;
    height: 100%;
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;
const NavigationBigDevice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2ex;
  @media (min-width: 700px) {
    flex-direction: row;
  }
  height: 8rem;
  padding: 1rem;
`;
const NavigationSmallDevice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2ex;
`;
const OpenClose = styled.div`
  align-self: center;
  /* HIDE BUTTON && NAVIGATION EXTENSION FOR BIG DEVICES*/
  @media (min-width: 500px) {
    display: none;
  }
`;
const NavigationLinkCart = styled(Link)``;
