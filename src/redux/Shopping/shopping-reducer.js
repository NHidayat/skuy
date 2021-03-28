import * as actionTypes from "./shopping-types";
import { products } from "../../data";

const INITIAL_STATE = {
  products: products,
  cart: [],
  cartCount: 0,
  totalPrice: 0,
  currentItem: null,
};

const countingCart = (cart) => {
  let count = 0;
  cart.forEach((item) => {
    if (item.selected) {
      count += item.qty;
    }
  });
  return count;
};

const countTotalPrice = (cart) => {
  let total = 0;
  cart.forEach((item) => {
    if (item.selected) {
      total += item.price * item.qty;
    }
  });
  return total;
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // get data
      const item = state.products.find((prod) => prod.id === action.payload.id);
      // checking
      const inCart = state.cart.find((i) =>
        i.id === action.payload.id ? true : false
      );
      state = {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + action.payload.qty }
                : item
            )
          : [
              ...state.cart,
              { ...item, qty: action.payload.qty, selected: true },
            ],
      };
      return {
        ...state,
        cartCount: countingCart(state.cart),
        totalPrice: countTotalPrice(state.cart),
      };
    case actionTypes.REMOVE_FROM_CART:
      state = {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      return {
        ...state,
        cartCount: countingCart(state.cart),
        totalPrice: countTotalPrice(state.cart),
      };
    case actionTypes.ADJUST_QTY:
      state = {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
      return {
        ...state,
        cartCount: countingCart(state.cart),
        totalPrice: countTotalPrice(state.cart),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      const productData = state.products.find(
        (x) => x.id === parseInt(action.payload.id)
      );
      return {
        ...state,
        currentItem: productData,
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
        cartCount: 0,
        totalPrice: 0,
      };
    case actionTypes.ADJUST_SELECTED:
      state = {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, selected: !item.selected }
            : item
        ),
      };
      return {
        ...state,
        cartCount: countingCart(state.cart),
        totalPrice: countTotalPrice(state.cart),
      };
    case actionTypes.SELECTED_ALL:
      state = {
        ...state,
        cart: state.cart.map((item) => ({
          ...item,
          selected: action.payload.value,
        })),
      };
      return {
        ...state,
        cartCount: countingCart(state.cart),
        totalPrice: countTotalPrice(state.cart),
      };
    default:
      return state;
  }
};

export default shopReducer;
