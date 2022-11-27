import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  CHANGE_PRODUCT_AMOUNT,
  UPDATE_AMOUNTS,
} from "../actions";

export const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const {
      id,
      color,
      productAmount: amount,
      name,
      price,
      image,
      stock,
    } = action.payload;
    //checking for item in cart
    if (state.cart.find(entry => entry.id === id)) {
      const temporaryCart = state.cart.map(entry => {
        //iterating for all the items in the cart
        //if matches we already have it in cart, we increase amount
        //and return the mutated item
        if (entry => entry.id === id) {
          let newAmount = entry.amount + amount;
          if (stock > entry.stock) {
            newAmount = entry.stock;
          }
          return { ...entry, amount: newAmount };
          //if not we simply return existing product
        } else {
          return entry;
        }
      });

      return { ...state, cart: temporaryCart };
    } else {
      const newCartEntry = { id, color, name, amount, price, image, stock };
      return { ...state, cart: [...state.cart, newCartEntry] };
    }
  }
  if (action.type === REMOVE_FROM_CART) {
    return {
      ...state,
      cart: [...state.cart.filter(entry => entry.id !== action.payload)],
    };
  }
  if (action.type === EMPTY_CART) {
    return {
      ...action.payload,
    };
    // return {
    //   ...state,
    //   cart: [],
    // };
  }
  if (action.type === CHANGE_PRODUCT_AMOUNT) {
    const { id, action: actiontype } = action.payload;
    const temporaryCart = state.cart.map(entry => {
      //changing amount of clicked item id is passed from button
      if (entry.id === id) {
        console.log(id);
        if (actiontype === "increment") {
          let tempAmount = entry.amount + 1;
          //check for stock amount
          if (tempAmount > entry.stock) {
            tempAmount = entry.stock;
          }
          return {
            ...entry,
            amount: tempAmount,
          };
        }
        if (actiontype === "decrement") {
          let tempAmount = entry.amount - 1;
          //check if amount is more than 0
          if (tempAmount < 1) {
            tempAmount = 1;
          }
          return {
            ...entry,
            amount: tempAmount,
          };
        }
      }
      //returning item that is not being clicked on
      else {
        return entry;
      }
    });
    return { ...state, cart: temporaryCart };
  }
  if (action.type === UPDATE_AMOUNTS) {
    const { total_item_amount, total_value_amount } = state.cart.reduce(
      (total, item) => {
        const { amount, price } = item;
        total.total_item_amount = total.total_item_amount + amount;
        total.total_value_amount = total.total_item_amount + amount * price;

        return total;
      },
      {
        total_item_amount: 0,
        total_value_amount: 0,
      }
    );
    return {
      ...state,
      total_item_amount: total_item_amount,
      total_value_amount: total_value_amount,
    };
  }
  throw new Error(
    `cant find dispatch action: "${action.type}", check dispatch action again `
  );
};
