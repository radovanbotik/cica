import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalCartContext } from "../context/CartContext";
// import ButtonTEMP from "./Button";

export default function SingleProductControls(props) {
  const { airtableID: id } = props;
  const { name, color, stock, price, image } = props;
  const colorArray = color.split(",");
  const [colorPrimary, setColorPrimary] = useState(colorArray[0]);
  const [productAmount, setProductAmount] = useState(1);
  const { addToCart } = useGlobalCartContext();
  const decrementAmount = () => {
    setProductAmount(prev => {
      if (prev - 1 >= 1) {
        return prev - 1;
      }
      return prev;
    });
  };
  const incrementAmount = () => {
    setProductAmount(prev => {
      if (prev + 1 <= stock) {
        return prev + 1;
      }
      return prev;
    });
  };
  return (
    <Control>
      <div className="color-control">
        <span>comes in:</span>
        <div className="colors-options">
          {colorArray.map((entry, index) => {
            return (
              <ColorCircle
                key={index}
                bg={entry}
                onClick={() => setColorPrimary(colorArray[index])}
                fullOpacity={colorPrimary === entry}
              ></ColorCircle>
            );
          })}
        </div>
      </div>
      <div className="amount-control">
        <span className="amount">Amount:</span>
        <span
          className="material-symbols-outlined icon"
          onClick={decrementAmount}
        >
          remove
        </span>
        <span className="amount">{productAmount}</span>
        <span
          className="material-symbols-outlined icon"
          onClick={incrementAmount}
        >
          add
        </span>
      </div>
      <Button
        to="/cart"
        onClick={() =>
          addToCart(id, color, productAmount, name, price, image[0].url, stock)
        }
      >
        Add to cart
      </Button>
    </Control>
  );
}

const Control = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--vspace-3);

  .color-control {
    display: flex;
    align-items: center;
    padding: var(--vspace-3);
    border: 1px solid var(--blue);
    box-shadow: 2px 4px 0px 0px var(--blue);
    .colors-options {
      margin-left: var(--vspace-3);
      display: flex;
      gap: var(--vspace-3);
    }
  }
  .amount-control {
    display: flex;
    align-items: center;
    gap: var(--vspace-3);
    padding: var(--vspace-3);
    border: 1px solid var(--blue);
    box-shadow: 2px 4px 0px 0px var(--blue);
    .amount {
      flex-basis: 3ex;
      display: grid;
      place-content: center;
    }
    .icon {
      cursor: pointer;
    }
    .icon:hover {
      font-variation-settings: "FILL" 1, "wght" 200;
    }
    .icon:active {
      /* outline: 1px solid var(--purple); */
    }
  }
`;
const ColorCircle = styled.span`
  display: inline-block;
  width: var(--vspace-3);
  height: var(--vspace-3);
  border: 1px solid var(--blue);
  background-color: ${props => props.bg || "red"};
  opacity: ${props => (props.fullOpacity ? 1 : "0.25")};
  cursor: pointer;
`;
const Button = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem 2rem;
  background-color: var(--purple);
  color: var(--blue);
  cursor: pointer;
  border: 1px solid var(--blue);
  box-shadow: 2px 4px 0px 0px var(--blue);
  &:active {
    transform: scale(0.95);
  }
`;
