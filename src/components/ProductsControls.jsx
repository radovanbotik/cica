import React from "react";
import styled from "styled-components";
import { useGlobalFilterContext } from "../context/FilterContext";
import { formatPrice } from "../utils/formatPrice";

export default function ProductsControls() {
  const { controls, retrieved_products, setControls, restoreDefaultControls } =
    useGlobalFilterContext();

  const { search, category, min_price, max_price, price } = controls;

  return (
    <Section>
      <form onSubmit={e => e.preventDefault()}>
        <Control>
          <label htmlFor="search">what you after fam..</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="enter to search.."
            value={search}
            onChange={setControls}
          />
        </Control>
        <Control>
          {[
            "everything",
            ...new Set(
              retrieved_products.map(entry => {
                return entry.category;
              })
            ),
          ].map((entry, index) => {
            return (
              <button
                key={index}
                onClick={setControls}
                name="category"
                className={`${category}` === `${entry}` ? "active" : "null"}
              >
                {entry}
              </button>
            );
          })}
        </Control>
        <Control>
          <label htmlFor="price">price range</label>
          <input
            type="range"
            name="price"
            id="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={setControls}
          />
          <span>{formatPrice(price)}</span>
        </Control>
      </form>{" "}
      <Control>
        <button onClick={restoreDefaultControls}>reset filters</button>
      </Control>
    </Section>
  );
}

const Section = styled.section`
  form {
    display: grid;
    gap: 2ex;
  }
`;
const Control = styled.div`
  display: grid;
  gap: 0.5ex;
  button.active {
    background-color: var(--purple);
  }
`;
