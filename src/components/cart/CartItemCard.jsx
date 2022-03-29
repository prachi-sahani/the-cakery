import { useState } from "react";
import { useAuth, useDBdata } from "../../context/index";
import {
  addToWishlist,
  removeFromCart,
  updateCart,
} from "../../utilities/server-request/server-request";

export function CartItemCard({ item, calculatePriceDetails }) {
  const { authToken } = useAuth();
  const { dataState, dataDispatch } = useDBdata();
  const [ wishlistText, setWishlistText ]= useState("MOVE TO WISHLIST")
  const isProductInWishlist =
    dataState.wishlist?.findIndex((product) => item._id === product._id) >= 0;

  async function updateItem(type) {
    const updatedCart = await updateCart(authToken, item._id, type);
    if (updatedCart) {
      dataDispatch({ type: "CART", payload: updatedCart.data.cart });
      calculatePriceDetails(updatedCart.data.cart);
    } else {
      // error in snackbar
    }
  }

  async function removeItem() {
    const updatedCart = await removeFromCart(authToken, item._id);
    if (updatedCart) {
      dataDispatch({ type: "CART", payload: updatedCart.data.cart });
      calculatePriceDetails(updatedCart.data.cart);
    } else {
      // error in snackbar
    }
  }

  async function moveToWishlist() {
    if (!isProductInWishlist) {
      setWishlistText("MOVING...")
      // remove from cart and add to wishlist
      const [updatedCart, updatedWishlist] = await Promise.all([
        removeFromCart(authToken, item._id),
        addToWishlist(authToken, item),
      ]);
      if (updatedCart && updatedWishlist) {
        calculatePriceDetails(updatedCart.data.cart);
        dataDispatch({ type: "CART", payload: updatedCart.data.cart });
        dataDispatch({
          type: "WISHLIST",
          payload: updatedWishlist.data.wishlist,
        });
      } else {
        setWishlistText("MOVE TO WISHLIST")
        
        // error msg in snackbar
      }
    }
    else{
      // show message in snackbar - product already in wishlist
    }
  }

  return (
    <div className="card card-hz">
      <img alt={item.title} className="card-img" src={item.image} />
      <div className="card-container">
        <div className="card-header">
          <div className="card-title">{item.title}</div>
          <div className="card-subtitle"></div>
        </div>
        <div className="card-content">
          <div className="product-price-description">
            <div className="product-price product-discount-price">
              <i className="material-icons">currency_rupee</i>
              {item.price - item.discount}
            </div>
            <div className="product-price product-sell-price">
              <i className="material-icons">currency_rupee</i>
              <s>{item.price}</s>
            </div>
            <div className="product-price product-discount">
              <i className="material-icons">currency_rupee</i>
              {item.discount} off
            </div>
          </div>
          <div className="qty-changer pt-2">
            <button
              className="btn-icon material-icons qty-decrease"
              disabled={item.qty === 1}
              onClick={() => updateItem("decrement")}
            >
              remove_circle_outline
            </button>
            <div className="qty">{item.qty}</div>
            <button
              className="btn-icon material-icons qty-increase"
              onClick={() => updateItem("increment")}
            >
              add_circle_outline
            </button>
          </div>
        </div>
        <div className="card-footer">
          <div className="action-button">
            <button
              className="btn-basic btn-outline-primary btn-sm"
              onClick={moveToWishlist}
            >
              {wishlistText}
            </button>
            <button
              className="btn-basic btn-outline-basic btn-sm"
              onClick={removeItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
