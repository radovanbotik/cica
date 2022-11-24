import {
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_INIT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "../actions";

export const productReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_INIT) {
    return { ...state, productsLoading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      productsLoading: false,
      products: action.payload,
      productsFeatured: action.payload.filter(entry => entry.featured),
      productsError: false,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }
  if (action.type === GET_PRODUCT_INIT) {
    return { ...state, productLoading: true, productError: false };
  }
  if (action.type === GET_PRODUCT_SUCCESS) {
    return {
      ...state,
      productLoading: false,
      productError: false,
      product: action.payload,
    };
  }
  if (action.type === GET_PRODUCT_ERROR) {
    return { ...state, productError: true };
  }
  throw new Error(
    `cant find dispatch action: "${action.type}", check dispatch action again `
  );
};
