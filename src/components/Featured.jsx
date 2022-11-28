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
        <h1>Hot right now:</h1>
        {/* <div className="cards">
          {window.innerWidth > 640 && window.innerWidth < 900
            ? productsFeatured.slice(0, 2).map(entry => {
                return <Product key={entry.id} {...entry} />;
              })
            : productsFeatured.slice(0, 3).map(entry => {
                return <Product key={entry.id} {...entry} />;
              })}
        </div> */}
        <div className="cards">
          {productsFeatured.slice(0, 2).map(entry => {
            return <Product key={entry.id} {...entry} />;
          })}
        </div>
      </Section>
    );
}

const Section = styled.section`
  /* display: grid;
  justify-content: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    text-shadow: -4px 4px 0px var(--bg-small);
    /* border: 2px solid var(--bg); */
  }
  .cards {
    display: grid;
    width: 100%;
    gap: var(--vspace-3);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
