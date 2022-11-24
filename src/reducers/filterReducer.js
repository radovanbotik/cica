import { RETRIEVE_PRODUCTS } from "../actions";

export const filterReducer = (state, action) => {
  if (action.type === RETRIEVE_PRODUCTS) {
    return {
      ...state,
      retrieved_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  throw new Error(
    `cant find dispatch action: "${action.type}", check dispatch action again `
  );
};
