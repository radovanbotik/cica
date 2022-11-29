import React from "react";
import styled from "styled-components";
import { useGlobalCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice.js";
import { Link } from "react-router-dom";

export default function CartTotal() {
  const { total_value_amount } = useGlobalCartContext();
  return (
    <Control>
      <h3>your order is: {formatPrice(total_value_amount)}</h3>
      <Button to="/checkout">proceed to checkout</Button>
    </Control>
  );
}

const Control = styled.div`
  display: grid;
  place-items: center;
  padding: var(--vspace-3);
  background-color: var(--bg-small);
  margin-bottom: 2ex;
  /* border: 2px solid var(--blue); */
  /* border: 2px solid var(--grey);
  box-shadow: 4px 4px 0px 0px black; */
`;
const Button = styled(Link)`
  align-self: stretch;
  justify-self: stretch;
  text-align: center;
  color: var(--bg-small);
  font-family: var(--nunito);
  text-decoration: none;
  text-transform: uppercase;
  background-color: var(--buttons);
  padding: 1rem 2rem;
  /* border: 2px solid var(--grey);
  box-shadow: 4px 4px 0px 0px black; */
  font-weight: 600;

  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;
