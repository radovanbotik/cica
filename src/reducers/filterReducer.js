import {
  RETRIEVE_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SET_SORT,
  SORT,
  SET_CONTROLS,
  FILTER_RESULTS,
} from "../actions";

export const filterReducer = (state, action) => {
  if (action.type === RETRIEVE_PRODUCTS) {
    return {
      ...state,
      retrieved_products: [...action.payload],
      filtered_products: [...action.payload],
      controls: {
        ...state.controls,
        min_price: Math.min(...action.payload.map(entry => entry.price)),
        max_price: Math.max(...action.payload.map(entry => entry.price)),
      },
    };
  }
  if (action.type === SET_GRID_VIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LIST_VIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === SET_SORT) {
    return {
      ...state,
      sort_by: action.payload,
    };
  }
  if (action.type === SORT) {
    if (state.sort_by === "price-lowest-to-highest") {
      return {
        ...state,
        filtereted_products: [
          ...state.filtered_products.sort((a, b) => a.price - b.price),
        ],
      };
    }
    if (state.sort_by === "price-highest-to-lowest") {
      return {
        ...state,
        filtered_products: [
          ...state.filtered_products.sort((a, b) => b.price - a.price),
        ],
      };
    }
    if (state.sort_by === "name-AZ") {
      return {
        ...state,
        filtered_products: [
          ...state.filtered_products.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        ],
      };
    }
    if (state.sort_by === "name-ZA") {
      return {
        ...state,
        filtered_products: [
          ...state.filtered_products
            .sort((a, b) => a.name.localeCompare(b.name))
            .reverse(),
        ],
      };
    }
  }
  if (action.type === SET_CONTROLS) {
    return {
      ...state,
      controls: {
        ...state.controls,
        [action.payload.controlName]: action.payload.controlValue,
      },
    };
  }
  if (action.type === FILTER_RESULTS) {
    return {
      ...state,
    };
  }
  throw new Error(
    `cant find dispatch action: "${action.type}", check dispatch action again `
  );
};
