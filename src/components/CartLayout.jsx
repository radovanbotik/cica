import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useGlobalCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartLayout() {
  const { cart, emptyCart } = useGlobalCartContext();
  return (
    <Control>
      {cart.map(entry => {
        return <CartItem key={entry.id} {...entry}></CartItem>;
      })}
      <CartTotal></CartTotal>
      <Buttons>
        <Button onClick={emptyCart}>empty cart</Button>
        <Button to="/shop">get more stuff</Button>
      </Buttons>
    </Control>
  );
}

const Control = styled.section`
  width: 100%;
  display: grid;
  gap: 1ex;
`;
const Buttons = styled.div`
  padding: var(--vspace-3);
  display: flex;
  flex-wrap: wrap;
  gap: var(--vspace-3);
  justify-content: space-between;
  justify-content: end;
`;
const Button = styled(Link)`
  color: var(--bg-small);
  background-color: var(--buttons);
  font-family: var(--volkhov);
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  border: 2px solid var(--grey);
  font-weight: 600;

  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;
