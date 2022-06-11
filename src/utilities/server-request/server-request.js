import axios from "axios";

function getCategories() {
  return axios.get("/api/categories");
}

function getProducts() {
  return axios.get("/api/products");
}

function getProductById(productId) {
  return axios.get(`/api/products/${productId}`);
}

function login(data) {
  return axios.post("/api/auth/login", data);
}

function signup(data) {
  return axios.post("/api/auth/signup", data);
}

function getCartItem(token) {
  return axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
}

function addToCart(token, product) {
  return axios.post(
    "/api/user/cart",
    {
      product,
    },
    {
      headers: { authorization: token },
    }
  );
}

function updateCart(token, productId, actionToBeTaken) {
  return axios.post(
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
}

function removeFromCart(token, productId) {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: token },
  });
}

function getWishlist(token) {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  });
}

function addToWishlist(token, product) {
  return axios.post(
    "/api/user/wishlist",
    {
      product,
    },
    {
      headers: { authorization: token },
    }
  );
}

function removeFromWishlist(token, productId) {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: { authorization: token },
  });
}

export {
  getCategories,
  getProducts,
  getProductById,
  getWishlist,
  getCartItem,
  addToCart,
  updateCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  login,
  signup,
};
