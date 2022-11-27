import React from "react";
import styled from "styled-components";
import { useGlobalCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartLayout } from "../components";

export default function Cart() {
  const { cart, addToCart, removeFromCart, changeAmount, emptyCart } =
    useGlobalCartContext();
  if (cart.length < 1) {
    return (
      <Section>
        <Control>
          <h2>It's empty fam.</h2>
          <Button to="/shop">i want to be lit</Button>
        </Control>
      </Section>
    );
  }
  return (
    <Section>
      <Control>
        <CartLayout></CartLayout>
      </Control>
    </Section>
  );
}

const Section = styled.section``;
const Control = styled.div`
  display: grid;
  place-items: center;
`;
const Button = styled(Link)`
  color: var(--blue);
  font-family: var(--nunito);
  text-decoration: none;
  text-transform: uppercase;
  background-color: var(--pink);
  padding: 1rem 2rem;
  border: 2px solid var(--grey);
  box-shadow: 4px 4px 0px 0px black;
  font-weight: 600;

  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;
