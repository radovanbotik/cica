import React from "react";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";
import { CardStyle } from "./Card";
import { Link } from "react-router-dom";
import { useGlobalProductsContext } from "../context/ProductContext";
import Product from "./Product";
import hearts from "../assets/hearts.png";
import hand from "../assets/hand.png";

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
        <div className="left-hand hand">
          <div className="image-control">
            <img src={hand} alt="iamge of hand" />
          </div>
        </div>
        <div className="right-hand hand">
          <div className="image-control">
            <img src={hand} alt="iamge of hand" />
          </div>
        </div>
        <div className="hearts">
          <div className="image-control">
            <img src={hearts} alt="" className="hearts" />
          </div>
        </div>
        <h1>Hot right now:</h1>
        <div className="img-control"></div>
        <div className="cards">
          {productsFeatured.slice(0, 2).map(entry => {
            return <Product key={entry.id} {...entry} />;
          })}
        </div>
      </Section>
    );
}

const Section = styled.section`
  margin-top: var(--vspace-0);
  position: relative;
  display: flex;
  flex-direction: column;

  /* justify-content: center; */
  /* align-items: center; */
  h1 {
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    text-shadow: -4px 4px 0px var(--bg-small);
    z-index: 1;

    /* border: 2px solid var(--bg); */
  }
  .hearts {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 4rem;
    .image-control {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .cards {
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    /* display: flex;
    flex-wrap: wrap; */
    gap: var(--vspace-3);
  }

  .hand {
    @media (max-width: 1100px) {
      display: none;
    }
    &.right-hand {
      transform: scaleX(1) rotate(-25deg);
      left: 95%;
      &:hover {
        transform: scaleX(1) rotate(-20deg);
      }
    }
    position: absolute;
    width: 10%;
    transform: scaleX(-1) rotate(-25deg);
    left: -5%;
    top: 45%;
    z-index: 3;
    .image-control {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &:hover {
      transform: scaleX(-1) rotate(-20deg);
    }
  }
`;
