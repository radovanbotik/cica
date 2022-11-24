import React from "react";
import styled from "styled-components";
import { useGlobalFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

export default function Products() {
  const { filtered_products, grid_view } = useGlobalFilterContext();

  if (filtered_products.length < 1) {
    return (
      <h2>Oooops..., Sorry brother seems like we are out of options here.</h2>
    );
  }
  if (grid_view) {
    return <GridView products={filtered_products}></GridView>;
  } else {
    return <ListView products={filtered_products}></ListView>;
  }
}
