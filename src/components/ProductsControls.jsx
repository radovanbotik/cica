import React from "react";
import styled from "styled-components";
import { useGlobalFilterContext } from "../context/FilterContext";
import { formatPrice } from "../utils/formatPrice";
import wall from "../assets/wall.jpg";
import skull from "../assets/skull.png";

export default function ProductsControls() {
  const { controls, retrieved_products, setControls, restoreDefaultControls } =
    useGlobalFilterContext();

  const { search, category, min_price, max_price, price } = controls;

  return (
    <Section>
      <h5>what you after?</h5>
      <form onSubmit={e => e.preventDefault()}>
        <Control className="search-control">
          {/* <label htmlFor="search">what you after fam..</label> */}
          <input
            type="text"
            name="search"
            id="search"
            placeholder="we have it fam.."
            value={search}
            onChange={setControls}
          />
        </Control>
        <Control className="buttons-control">
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
        <Control className="price-control">
          <div className="control">
            <label htmlFor="price">money</label>
            <span>{formatPrice(price)}</span>
          </div>

          <input
            type="range"
            name="price"
            id="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={setControls}
          />
        </Control>
      </form>{" "}
      <Control className="buttons-control danger">
        <button onClick={restoreDefaultControls}>reset filters</button>
      </Control>
    </Section>
  );
}

const Section = styled.section`
  /* background-color: var(--buttons); */
  /* background-image: url(${wall}); */
  /* background-size: cover; */
  h5 {
    margin-top: 0;
    color: var(--text);
    font-weight: 700;
    white-space: nowrap;
  }
  form {
    display: grid;
    gap: var(--vspace-2);
  }
`;
const Control = styled.div`
  display: grid;
  gap: var(--vspace-3);

  &.search-control {
    /* padding: var(--vspace-3); */
    label {
      /* text-transform: uppercase; */
    }
    input {
      padding: 0.5rem var(--vspace-3);
      box-shadow: -2px 4px 8px 2px var(--bg-small);
      text-transform: uppercase;

      /* width: 100%; */
    }
  }
  &.buttons-control {
    button.active {
      background-color: var(--bg-small);
      color: var(--buttons);
    }
    button {
      text-transform: uppercase;
      padding: 0.5rem var(--vspace-3);
      box-shadow: -2px 4px 8px 2px var(--bg-small);

      cursor: pointer;
      /* width: 100%; */
    }
  }
  &.buttons-control.danger {
    button {
      background-color: var(--text);
    }
  }
  &.price-control {
    text-transform: uppercase;
    margin-bottom: var(--vspace-3);

    .control {
      display: flex;
      justify-content: space-between;
      span,
      label {
        font-family: var(--nunito);
        padding: 0 var(--vspace-3);
        background-color: white;
        color: var(--bg-small);
        box-shadow: -2px 4px 8px 2px var(--bg-small);
      }
    }
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;

      /* width: 15rem; */
    }
    input[type="range"]::-webkit-slider-runnable-track {
      background-color: var(--buttons);
      /* height: 0.5rem; */
      height: 0.2rem;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      /* background-color: var(--bg-small); */
      height: 1rem;
      width: 1rem;
      transform: translateY(-6px);
      background-image: url(${skull});
      background-size: contain;
      background-position: center;
    }
  }
`;
