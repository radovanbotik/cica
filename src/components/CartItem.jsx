import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/formatPrice";
import { useGlobalCartContext } from "../context/CartContext";
import sky from "../assets/sky.jpg";

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

        <div className="product-name-price">
          <span>{name}</span>
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
  background-color: var(--bg-small);
  background-image: url(${sky});
  background-size: cover;
`;
const ItemHeader = styled.div`
  display: flex;
  gap: var(--vspace-3);
  .image-control {
    grid-row: 1/3;
    max-width: 80px;
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

  .product-name-price {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--vspace-3);
    text-transform: uppercase;
  }
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: var(--vspace-3);
  padding: var(--vspace-3);
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
