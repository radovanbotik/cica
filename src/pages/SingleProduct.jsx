import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalProductsContext } from "../context/ProductContext";
import {
  CardStyle,
  Error,
  Loading,
  Rating,
  ImagePreview,
  SingleProductControls,
} from "../components";
import { formatPrice } from "../utils/formatPrice";
import poster4 from "../assets/poster4.jpg";

export default function SingleProduct() {
  const url = `https://cica-serverless.netlify.app/.netlify/functions/product/?id=`;

  const { product, productError, productLoading, fetchSingleProduct } =
    useGlobalProductsContext();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);
  useEffect(() => {
    if (productError) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [productError]);
  if (productLoading) {
    return <Loading />;
  }
  if (productError) {
    return <Error />;
  }
  if (product.fields) {
    const { name, image, rating, price, description, stock } = product.fields;
    return (
      <Section>
        <ProductDisplay>
          <ImagePreview images={image} />
          <div className="details">
            <div className="name-and-rating">
              <h2 className="product-name">{name}</h2>
              <Rating stars={rating} />
            </div>
            <h5 className="product-price">{formatPrice(price)}</h5>
            <p className="product-description">{description}</p>
            <p className="product-avaibility">
              Avaibility: {stock > 0 ? "In Stock" : "Out Of Stock"}{" "}
            </p>
            {stock > 0 && (
              <SingleProductControls {...product.fields} airtableID={id} />
            )}
          </div>
        </ProductDisplay>
      </Section>
    );
  }
}
const Section = styled.section`
  display: grid;
`;
const ProductDisplay = styled.article`
  display: grid;
  box-shadow: -8px 4px 40px 0px var(--bg-small);
  padding: var(--vspace-3);
  border: 1px solid var(--buttons);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--vspace-3);
  background-image: linear-gradient(to left, #000000b9, var(--bg-small)),
    url(${poster4});
  background-size: cover;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--vspace-2);
  }
  .details {
    color: var(--buttons);
    background-size: cover;
    border: 1px solid white;
    padding: var(--vspace-2);
    .name-and-rating {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      h2 {
        margin: 0;
      }
    }
  }
`;
