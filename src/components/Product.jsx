import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useGlobalFilterContext } from "../context/FilterContext";
import eye from "../assets/eye.png";
import sky from "../assets/sky.jpg";

export default function Product(props) {
  const { grid_view } = useGlobalFilterContext();
  const { id, name, price, image, shipping, color, category, description } =
    props;
  return (
    <ProductCard to={`/shop/product/${id}`} className="LinkWrap">
      <div className="image-control">
        <img src={image[0].url} alt="" />
      </div>
      <div className="info-control">
        <h5>{name}</h5>
        <h5>{formatPrice(price)}</h5>{" "}
        {!grid_view && (
          <div className="description-control">
            <p>{description}</p>
          </div>
        )}
      </div>
    </ProductCard>
  );
}

const ProductCard = styled(Link)`
  width: 100%;
  background-image: url(${sky});
  background-size: cover;
  box-shadow: -8px 4px 40px 0px var(--bg-small);
  padding: var(--vspace-2);
  position: relative;
  text-decoration: none;
  font-family: inherit;
  color: inherit;
  display: grid;
  grid-template-rows: 200px min-content;

  .image-control {
    height: 0;
    width: 100%;
    padding-top: 100%;
    position: relative;
    /* clip-path: ellipse(80% 80% at 50% 20%); */
    img {
      max-height: 200px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 25%;
    }
  }
  .info-control {
    justify-self: center;
    transform: translate(0px, -20px);
    width: 90%;
    background-color: var(--bg-small);
    padding: var(--vspace-3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid var(--text); /* flex-direction: column; */
    h5 {
      margin: 0;
      padding: 0;
    }
  }
`;
