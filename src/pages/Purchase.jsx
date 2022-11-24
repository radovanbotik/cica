import React from "react";
import styled from "styled-components";
import { Products, ProductsControls, ViewToggle } from "../components";

export default function Purchase() {
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

const Section = styled.section``;
const Control = styled.div`
  display: grid;
  gap: var(--vspace-3);
  @media (min-width: 600px) {
    grid-template-columns: min-content 1fr;
  }
`;
