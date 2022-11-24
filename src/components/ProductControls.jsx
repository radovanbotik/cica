import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProductControls(props) {
  const { id, color, stock } = props;
  const colorArray = color.split(",");
  const [colorPrimary, setColorPrimary] = useState(colorArray[0]);
  const [productAmount, setProductAmount] = useState(1);

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
      if (prev + 1 <= 10) {
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
            console.log(entry);
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
        <span>Amount:</span>
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
    </Control>
  );
}

const Control = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--vspace-3);

  .color-control {
    display: flex;
    align-items: center;
    padding: var(--vspace-3);
    border: 1px solid var(--blue);
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
    .icon {
      cursor: pointer;
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
