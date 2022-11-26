import {
  RETRIEVE_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SET_SORT,
  SORT,
  SET_CONTROLS,
  FILTER_RESULTS,
  FILTER_RESET,
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
        price: Math.max(...action.payload.map(entry => entry.price)),
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
    const { retrieved_products } = state;
    const { search, category, price } = state.controls;
    let products_temporary = [...retrieved_products];
    if (search.length > 0) {
      products_temporary = products_temporary.filter(entry =>
        entry.name.startsWith(search)
      );
    }
    if (category !== "everything") {
      products_temporary = products_temporary.filter(
        entry => entry.category === category
      );
    }
    if (price !== state.max_price) {
      products_temporary = products_temporary.filter(
        entry => entry.price < price
      );
    }
    return {
      ...state,
      filtered_products: products_temporary,
    };
  }
  if (action.type === FILTER_RESET) {
    return {
      ...state,
      controls: {
        ...state.controls,
        search: "",
        category: "everything",
        price: state.controls.max_price,
      },
    };
  }
  throw new Error(
    `cant find dispatch action: "${action.type}", check dispatch action again `
  );
};
