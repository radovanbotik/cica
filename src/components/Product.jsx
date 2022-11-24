import React from "react";
import styled from "styled-components";
import { CardStyle } from "./Card";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export default function Product(props) {
  const { id, name, price, image, shipping, color, category } = props;
  return (
    <ProductCard>
      <Link to={`/purchase/product/${id}`} className="LinkWrap">
        <div className="image-control">
          <img src={image[0].url} alt="" />
        </div>
        <div className="info-control">
          <h5>{name}</h5>
          <p>Price:{formatPrice(price)}</p>
        </div>
      </Link>
    </ProductCard>
  );
}

const ProductCard = styled(CardStyle)`
  height: 100%;
  .LinkWrap {
    display: flex;
    flex-direction: column;
    gap: var(--vspace-3);
  }
  .image-control {
    height: 0;
    padding-top: 100%;
    position: relative;
    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info-control {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h5 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
`;
