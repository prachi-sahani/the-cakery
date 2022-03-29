import "./products.css";
import "../../styles.css";
import { useDBdata, useAuth } from "../../context/index";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  updateCart,
} from "../../utilities/server-request/server-request";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }) {
  const { dataState, dataDispatch } = useDBdata();
  const { authToken } = useAuth();
  const [actionText, setActionText] = useState("ADD TO CART");
  const navigate = useNavigate();
  const isProductInWishlist =
    dataState.wishlist?.findIndex((item) => item._id === product._id) >= 0;
  const [wishlistIcon, setWishlistIcon] = useState(
    isProductInWishlist && authToken ? "favorite" : "favorite_border"
  );
  function cartAction() {
    // if user is logged in then only add items to cart
    if (authToken) {
      setActionText("LOADING...");
      if (actionText === "ADD TO CART") {
        const isProductInCart =
          dataState.cart?.findIndex((item) => item._id === product._id) >= 0;
        if (isProductInCart) {
          (async () => {
            const updatedCart = await updateCart(
              authToken,
              product._id,
              "increment"
            );
            if (updatedCart) {
              dataDispatch({ type: "CART", payload: updatedCart.data.cart });
              setActionText("GO TO CART");
            } else {
              // show error snackbar
              setActionText("ADD TO CART");
            }
          })();
        } else {
          (async () => {
            const updatedCart = await addToCart(authToken, product);
            if (updatedCart) {
              dataDispatch({ type: "CART", payload: updatedCart.data.cart });
              setActionText("GO TO CART");
            } else {
              // show error snackbar
            }
          })();
        }
      } else {
        navigate("/cart");
      }
    } else {
      localStorage.setItem("lastRoute", "/products");
      navigate("/login");
    }
  }

  async function updateWishlist() {
    if (authToken) {
      if (isProductInWishlist) {
        const updatedWishlist = await removeFromWishlist(
          authToken,
          product._id
        );
        dataDispatch({
          type: "WISHLIST",
          payload: updatedWishlist.data.wishlist,
        });
        setWishlistIcon("favorite_border");
      } else {
        const updatedWishlist = await addToWishlist(authToken, product);
        dataDispatch({
          type: "WISHLIST",
          payload: updatedWishlist.data.wishlist,
        });
        setWishlistIcon("favorite");
      }
    } else {
      localStorage.setItem("lastRoute", "/products");
      navigate("/login");
    }
  }

  return (
    <div className="product-card card card-w-badge">
      <div className="card-image">
        <img alt="" className="card-img product-image" src={product.image} />
        {product.tag && (
          <div className="badge badge-bestseller">{product.tag}</div>
        )}

        <div className="product-rating">
          {product.rating}
          <i className="material-icons">star_rate</i>
        </div>
      </div>

      <div className="card-header">
        <div className="card-title product-title">{product.title}</div>
        <i
          className="card-subtitle wishlist material-icons"
          onClick={updateWishlist}
        >
          {wishlistIcon}
        </i>
      </div>
      <div className="card-content">
        <div className="product-description">{product.description}</div>
        <div className="product-price-description mt-3 mb-1x1">
          <div className="product-price product-discount-price">
            <i className="material-icons">currency_rupee</i>
            {product.price - product.discount}
          </div>
          {product.discount && (
            <div className="product-price product-sell-price">
              <i className="material-icons">currency_rupee</i>
              <s>{product.price}</s>
            </div>
          )}
          {product.discount && (
            <div className="product-price product-discount">
              <i className="material-icons">currency_rupee</i>
              {product.discount} off
            </div>
          )}
        </div>
      </div>
      <div className="card-footer">
        <div className="action-button">
          <button
            className="btn-basic btn-primary"
            disabled={actionText === "LOADING..."}
            onClick={cartAction}
          >
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
}
