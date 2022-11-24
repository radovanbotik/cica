import React from "react";
import styled from "styled-components";
import Product from "./Product";

export default function GridView({ products }) {
  return (
    <Control>
      {products.map(entry => {
        return <Product key={entry.id} {...entry} />;
      })}
    </Control>
  );
}

const Control = styled.div`
  display: grid;
  width: 100%;
  /* max-width: 400px; */
  gap: var(--vspace-3);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
