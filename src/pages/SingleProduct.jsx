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
            <h5>{name}</h5>
            <Rating stars={rating} />
            <h5>{formatPrice(price)}</h5>
            <p>{description}</p>
            <p>Avaibility: {stock > 0 ? "In Stock" : "Out Of Stock"} </p>
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
const ProductDisplay = styled(CardStyle)`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--vspace-3);
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--vspace-2);
  }
  /* background-color: var(--purple); */
`;
