function shoppingCart(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
  
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        return [...state, action.value];
      default:
        return state
    }
  }
  