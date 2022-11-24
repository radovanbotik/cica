import React from "react";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";
import { CardStyle } from "./Card";
import { Link } from "react-router-dom";
import { useGlobalProductsContext } from "../context/ProductContext";
import Product from "./Product";

export default function Featured() {
  const { productsFeatured, productsError, productsLoading } =
    useGlobalProductsContext();
  if (productsLoading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }
  if (productsFeatured)
    return (
      <Section>
        <h2>Hot right now:</h2>
        <div className="cards">
          {productsFeatured.slice(0, 4).map(entry => {
            return <Product key={entry.id} {...entry} />;
          })}
        </div>
      </Section>
    );
}

const Section = styled.section`
  h2 {
    font-weight: 700;
    text-transform: uppercase;
  }
  .cards {
    display: grid;
    width: 100%;
    gap: var(--vspace-3);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
