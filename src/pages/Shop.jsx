import React from "react";
import styled from "styled-components";
import { Products, ProductsControls, ViewToggle } from "../components";
import sky from "../assets/sky.jpg";

export default function Shop() {
  return (
    <Section>
      <h1>Get that drip</h1>
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
  h1 {
    padding: 0 var(--vspace-2);
    @media (min-width: 600px) {
      text-align: left;
    }
    text-align: center;
    text-shadow: 0px 0px 100px var(--buttons);
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
