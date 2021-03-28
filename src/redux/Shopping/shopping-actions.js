import * as actionTypes from "./shopping-types";

export const addToCart = (itemID, value) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const adjustSelected = (id) => {
  return {
    type: actionTypes.ADJUST_SELECTED,
    payload: {
      id: id,
    },
  };
};

export const selectedAll = (value) => {
  return {
    type: actionTypes.SELECTED_ALL,
    payload: {
      value: value,
    },
  };
};
