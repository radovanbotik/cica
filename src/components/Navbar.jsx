import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useGlobalCartContext } from "../context/CartContext";
import crown from "../assets/crown.png";
import underline from "../assets/underline.png";

export default function Navbar() {
  const { total_item_amount } = useGlobalCartContext();
  const [isOpen, setIsOpen] = useState(false);
  const iconToggle = {
    fontVariationSettings: `${total_item_amount ? "'FILL' 1" : "'FILL' 0"}`,
  };
  return (
    <Navigation>
      <NavigationBigDevice>
        <Logo to="/">
          <div className="image-control">
            <img src={crown} alt="crown logo" />
          </div>
          <span>urban cat.</span>
        </Logo>
        <NavigationLinks>
          <NavigationLink to="/">About</NavigationLink>
          <NavigationLink
            to="/shop"
            fontcolor="var(--buttons)"
            // dashedborder="2px dashed var(--pink)"
          >
            BUY MY STUFF
          </NavigationLink>
          {/* <NavigationLink to="/posts">Posts</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink> */}
          <NavigationLink to="/cart">
            {/* Cart */}
            <div className="material-symbols-outlined icon" style={iconToggle}>
              shopping_bag
            </div>
            <div className="item-count">
              {total_item_amount > 0 && total_item_amount}
            </div>
          </NavigationLink>
        </NavigationLinks>
        <OpenClose onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? (
            <span className="material-symbols-outlined icon">close</span>
          ) : (
            <span className="material-symbols-outlined icon">menu</span>
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
`;
const NavigationLinks = styled.div`
  display: none;
  /* color: var(--accent); */

  /* DISPLAY LINKS FOR BIG DEVICES */
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    align-items: flex-end;
    gap: 2ex;
  }
`;
const NavigationLink = styled(Link)`
  text-shadow: -1px 2px 5px var(--bg-small);
  white-space: nowrap;
  text-decoration: none;
  padding: 0 var(--vspace-3);
  font-family: var(--nunito);
  font-weight: 800;
  display: grid;
  place-items: center;
  position: relative;
  .icon {
    cursor: pointer;
  }
  &:last-child {
    position: relative;
    display: grid;
    place-items: center;
    transform: translateY(-2px);
    /* .material-symbols-outlined {
      font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
    } */
    .icon {
      color: var(--buttons);
      grid-column: 1/2;
      grid-row: 1/2;
      font-size: 2rem;
      font-variation-settings: "FILL" 1;
    }
    .item-count {
      font-weight: 400;
      grid-column: 1/2;
      grid-row: 1/2;
      font-size: 0.75rem;
      color: var(--bg-small);
      transform: translateY(4px);
      z-index: 2;
    }
  }
  &:visited,
  &:active {
    color: ${props => props.fontcolor || "inherit"};
  }
  &:hover:not(:last-child) {
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 20px;
      left: 0;
      /* left: 50%; */
      /* transform: translate(-50%); */
      background-image: url(${underline});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 4;
    }
  }
`;
const Logo = styled(Link)`
  margin: 0 auto;
  text-shadow: -1px 2px 5px var(--bg-small);
  @media (min-width: 500px) {
    margin: unset;
    margin-right: auto;
  }
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  /* align-items: center; */
  align-items: flex-end;
  text-decoration: none;
  font-family: var(--futura);
  text-transform: uppercase;
  letter-spacing: -1px;
  color: inherit;
  font-weight: 800;
  font-size: 2rem;
  white-space: nowrap;
  .image-control {
    /* max-width: 150px; */
    width: 36px;
    height: 36px;
    position: relative;
    transform: rotate(10deg);
    img {
      position: absolute;
      /* left: -35px; */
      /* top: -7px; */
      top: -8px;
      left: 4px;
      height: 100%;
      width: 100%;
      display: block;
      object-fit: contain;
    }
  }
`;
const NavigationBigDevice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2ex;
  overflow: visible;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
  height: 8rem;
  padding: var(--vspace-2);
`;
const NavigationSmallDevice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2ex;
`;
const OpenClose = styled.div`
  cursor: pointer;
  align-self: center;
  /* HIDE BUTTON && NAVIGATION EXTENSION FOR BIG DEVICES*/
  @media (min-width: 500px) {
    display: none;
  }
`;
const NavigationLinkCart = styled(Link)``;
