import React from "react";
import { Navigation, NavigationLink } from "./Navbar.styled";

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
