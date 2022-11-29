import React from "react";
import styled from "styled-components";
import Product from "./Product";

export default function ListView({ products }) {
  return (
    <Control>
      {products.map(entry => {
        return <Product key={entry.id} {...entry} />;
      })}
    </Control>
  );
}

const Control = styled.div`
  /* max-width: 300px; */
  display: grid;
  grid-auto-flow: row;
  /* justify-content: flex-end; */
  gap: var(--vspace-3);
`;
