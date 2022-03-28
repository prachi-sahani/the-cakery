import axios from "axios";

 function getCategories() {
  try {
    return axios.get("/api/categories");
  } catch (error) {
    console.log(error);
  }
}

 function getProducts() {
  try {
    return axios.get("/api/products");
  } catch (error) {
    console.log(error);
  }
}

 function login(data) {
  try {
    return axios.post("/api/auth/login", data);
  } catch (error) {
    console.log(error);
  }
}


 function getCartItem(token, ) {
  try {
    return  axios.get("/api/user/cart", {
      headers: { authorization: token },
    });
  } catch (error) {
    console.log(error);
  }
}

 function addToCart(token, product) {
  try {
    return  axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: { authorization: token },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

 function updateCart(token, productId, actionToBeTaken) {
  try {
    return  axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: actionToBeTaken,
        },
      },
      {
        headers: { authorization: token },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

 function removeFromCart(token, productId) {
  try {
    return  axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token },
    });
  } catch (error) {
    console.log(error);
  }
}

 function getWishlist(token, ) {
  try {
    return  axios.get("/api/user/wishlist", {
      headers: { authorization: token },
    });
  } catch (error) {
    console.log(error);
  }
}

 function addToWishlist(token, product) {
  try {
    return  axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      {
        headers: { authorization: token },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

 function removeFromWishlist(token, productId) {
  try {
    return  axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: token },
    });
  } catch (error) {
    console.log(error);
  }
}
export {
  getCategories,
  getProducts,
  getWishlist,
  getCartItem,
  addToCart,
  updateCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  login
};
