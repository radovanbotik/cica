import React from "react";
import styled from "styled-components";
import { CardStyle } from "./Card";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useGlobalFilterContext } from "../context/FilterContext";

export default function Product(props) {
  const { grid_view } = useGlobalFilterContext();
  const { id, name, price, image, shipping, color, category, description } =
    props;
  return (
    <ProductCard>
      <LinkWrap
        to={`/shop/product/${id}`}
        className="LinkWrap"
        // view={grid_view}
      >
        <div className="image-control">
          <img src={image[0].url} alt="" />
        </div>
        <div className="info-control">
          <h5>{name}</h5>
          <p>Price:{formatPrice(price)}</p>{" "}
          {!grid_view && (
            <div className="description-control">
              <p>{description}</p>
            </div>
          )}
        </div>
      </LinkWrap>
    </ProductCard>
  );
}

const LinkWrap = styled(Link)`
  display: flex;
  /* display: ${props => (props.view ? "flex" : "grid")}; */
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  gap: var(--vspace-3);
  text-decoration: none;
  font-family: inherit;
  color: inherit;
`;
const ProductCard = styled(CardStyle)`
  /* max-width: 300px; */
  height: 100%;
  .image-control {
    height: 0;
    padding-top: 100%;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info-control {
    height: 100%;
    display: flex;
    flex-direction: column;
    h5 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
  .description-control {
  }
`;
