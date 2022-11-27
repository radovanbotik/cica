import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/formatPrice";
import { useGlobalCartContext } from "../context/CartContext";

export default function CartItem(props) {
  const { amount, id, image, name, price, stock } = props;
  const { removeFromCart, changeAmount } = useGlobalCartContext();

  const decrementAmount = id => {
    changeAmount(id, "decrement");
  };
  const incrementAmount = id => {
    changeAmount(id, "increment");
  };

  return (
    <Control>
      <ItemHeader>
        <div className="image-control">
          <img src={image} alt={name} />
        </div>

        <div className="product-name">
          <span>{name}</span>
        </div>
        <div className="product-price">
          <span>{formatPrice(price)}</span>
        </div>
      </ItemHeader>
      <ItemControls>
        <span className="amount">Amount:</span>
        <span
          className="material-symbols-outlined icon"
          onClick={() => decrementAmount(id)}
        >
          remove
        </span>
        <span className="amount">{amount}</span>
        <span
          className="material-symbols-outlined icon"
          onClick={() => incrementAmount(id)}
        >
          add
        </span>
        <DeleteButton onClick={() => removeFromCart(id)}>
          <span className="material-symbols-outlined icon">delete</span>
        </DeleteButton>
      </ItemControls>
    </Control>
  );
}

const Control = styled.div`
  padding: var(--vspace-3);
  display: flex;
  justify-content: space-between;
  background-color: sandybrown;
`;
const ItemHeader = styled.div`
  padding: var(--vspace-3);
  background-color: gold;
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: 1fr 1fr;
  gap: var(--vspace-3);
  .image-control {
    grid-row: 1/3;
    /* width: 100%; */
    /* height: 90px; */
    max-width: 100px;
    /* height: 0; */
    /* padding-top: 100%; */
    position: relative;
    img {
      display: block;
      /* position: absolute; */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .product-name {
    grid-row: 1;
    grid-column: 2;
  }
  .product-price {
    grid-row: 2;
    grid-column: 2;
  }
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: var(--vspace-3);
  padding: var(--vspace-3);
  /* border: 1px solid var(--blue);
  box-shadow: 2px 4px 0px 0px var(--blue); */
  .amount {
    flex-basis: 3ex;
    display: grid;
    place-content: center;
  }
  .icon {
    cursor: pointer;
  }
  .icon:hover {
    font-variation-settings: "FILL" 0, "wght" 200;
  }
  .icon:active {
    outline: 1px solid var(--purple);
  }
`;
const DeleteButton = styled.div`
  display: grid;
  place-items: center;
  .icon:hover {
    font-variation-settings: "FILL" 0, "wght" 200;
  }
`;
