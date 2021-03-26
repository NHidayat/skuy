import * as actionTypes from "./shopping-types";
import { products } from "../../data";

const INITIAL_STATE = {
  products: products,
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // get data
      const item = state.products.find((prod) => prod.id === action.payload.id);
      // check
      const inCart = state.cart.find((i) =>
        i.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + action.payload.qty }
                : item
            )
          : [...state.cart, { ...item, qty: action.payload.qty }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default shopReducer;
