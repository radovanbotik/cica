import React from "react";
import styled from "styled-components";
import { Products, ProductsControls, ViewToggle } from "../components";

export default function Shop() {
  return (
    <Section>
      <section className="title-control">
        <hr />
        <h1>Get that drip</h1>
      </section>
      <Control>
        <div className="filter-control">
          <ProductsControls />
        </div>
        <div className="product-control">
          <ViewToggle />
          <Products />
        </div>
      </Control>
    </Section>
  );
}

const Section = styled.section`
  .title-control {
    padding-top: 0;
    padding-bottom: 0;
    text-align: right;
    display: flex;
    gap: 4ex;
    hr {
      margin-right: auto;
      width: 100%;
      /* height: 20px; */
      height: 8px;
      align-self: center;
      background-color: var(--blue);
      border-width: 0;
      border: none;
      /* border-bottom: 12px double var(--pink); */
      /* border-top: medium double white; */
    }

    h1 {
      white-space: nowrap;
    }
  }
  /* margin: var(--vspace-3); */
`;
const Control = styled.div`
  display: grid;
  gap: var(--vspace-3);
  @media (min-width: 600px) {
    grid-template-columns: min-content 1fr;
  }
`;
