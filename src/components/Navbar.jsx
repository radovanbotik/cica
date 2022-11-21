import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Navigation>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/purchase">Purchase</NavigationLink>
      <NavigationLink to="/cart">Cart</NavigationLink>
      <NavigationLink to="/posts">Posts</NavigationLink>
      <NavigationLink to="/login">Login</NavigationLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  gap: 2ex;
`;
const NavigationLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
`;
