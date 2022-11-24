import { useContext, useReducer, useEffect } from "react";
import { productReducer } from "../reducers/productsReducer";
import React from "react";
import axios from "axios";
import {
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_INIT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "../actions";

const ProductsProvider = React.createContext();
const initialState = {
  featuredProducts: [],
  products: [],
  productsError: false,
  productsLoading: false,
  product: {},
  productLoading: false,
  productError: false,
};

const url =
  "https://cica-serverless.netlify.app/.netlify/functions/allProducts";

const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  //fetch products
  const fetchAllProducts = async url => {
    dispatch({ type: GET_PRODUCTS_INIT });
    try {
      const resp = await axios(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: resp.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async url => {
    dispatch({ type: GET_PRODUCT_INIT });
    try {
      const resp = await axios(url);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: resp.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchAllProducts(url);
  }, []);
  return (
    <ProductsProvider.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsProvider.Provider>
  );
};

const useGlobalProductsContext = () => {
  return useContext(ProductsProvider);
};

export { ProductsContext, useGlobalProductsContext };
