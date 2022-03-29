export function dataReducer(state, action) {
  switch (action.type) {
    case "CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "PRODUCTS": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "WISHLIST": {
      return {
        ...state,
        wishlist: action.payload,
      };
    }
    case "CART": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default:
      return { ...state };
  }
}
