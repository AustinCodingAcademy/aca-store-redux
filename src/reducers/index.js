import { combineReducers } from "redux";

function shoppingCart(state=[], action) {
    // if (typeof state === 'undefined') {
    //   return []
    // }
  
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        return [...state, action.value];
      default:
        return state
    }
}
  
function products(state=[], action) {
  // if (action.type === 'PRODUCTS_LOADED'){
  //   return [...state, action.value]
  // }
  // return state

  // switch (action.type) {
  //   case 'PRODUCTS_LOADED':
  //     return [action.value]
  //   default:
  //     return state
  // }
  return state
}

export default combineReducers ({
  shoppingCart,
  products
})