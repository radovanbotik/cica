import { GET_PRODUCTS_INIT, GET_PRODUCTS_SUCCESS } from "../actions";

export const productReducer = (state, action) => {
  if (action.type === "GET_PRODUCTS_INIT") {
    return { ...state };
  }
  throw new Error(
    `cant find dispatch action: "${action.type}", check dispatch action again `
  );
};
