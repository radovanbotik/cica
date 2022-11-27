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
      {/* <CartHeaders>
        <h5>item</h5>
        <h5>price</h5>
        <h5>amount</h5>
        <h5>total</h5>
        <h5>
          <span className="material-symbols-outlined delete-icon">delete</span>
        </h5>
      </CartHeaders> */}
      {cart.map(entry => {
        return <CartItem key={entry.id} {...entry}></CartItem>;
      })}
      <CartTotal></CartTotal>
      <Buttons>
        <Button bg={"grey"} onClick={emptyCart}>
          empty cart
        </Button>
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
  display: flex;
  justify-content: space-between;
`;
const Button = styled(Link)`
  color: var(--blue);
  font-family: var(--nunito);
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${props => (props.bg ? props.bg : "var(--purple)")};
  padding: 1rem 2rem;
  border: 2px solid var(--grey);
  box-shadow: 4px 4px 0px 0px black;
  font-weight: 600;

  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;
const CartHeaders = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) min-content;
  .delete-icon {
    cursor: pointer;
    font-variation-settings: "FILL" 0, "wght" 400 "GRAD" -25;
  }
  .delete-icon:hover {
    font-variation-settings: "FILL" 1, "wght" 300;
  }
`;
