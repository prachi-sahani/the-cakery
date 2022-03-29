import { useAuth, useDBdata } from "../../context/index";
import { addToCart, removeFromWishlist, updateCart } from "../../utilities/server-request/server-request";
import "./wishlistPage.css";

export function WishlistItemCard({ product }) {
  const {authToken} = useAuth();
  const { dataState, dataDispatch} = useDBdata()
  function takeAction(){
      const isProductInCart = dataState.cart.findIndex(item => item._id === product._id) >= 0;
      if(isProductInCart){
        (async () => {
          const updatedCart = await updateCart(authToken, product._id, "increment")
          if(updatedCart){
            dataDispatch({ type: "CART", payload: updatedCart.data.cart });
          }
          else{
            // show error snackbar
          }
        })()
      }
      else{
        (async () => {
          const updatedCart = await addToCart(authToken, dataDispatch, product);
          if(updatedCart){
            dataDispatch({ type: "CART", payload: updatedCart.data.cart });
          }
          else{
            // show error snackbar
          }
        })()
      }
   
  }

  async function removeItem(){
    const updatedWishlist = await removeFromWishlist(authToken, product._id)
    dataDispatch({ type: "WISHLIST", payload: updatedWishlist.data.wishlist });

  }
  return (
    <div className="product-card card card-w-badge card-dismiss">
      <div className="btn-close material-icons btn-fab btn-sm btn-basic" onClick={removeItem}>
        close
      </div>
      <div className="card-image">
        <img
          alt={product.title}
          className="card-img product-image"
          src={product.image}
        />
        {product.tag && <div className="badge badge-bestseller">{product.tag}</div>}
        <div className="product-rating">
          {product.rating}<i className="material-icons">star_rate</i>
        </div>
      </div>

      <div className="card-header">
        <div className="card-title product-title">{product.title}</div>
      </div>
      <div className="card-content product-description">
      <div className="product-description">{product.description}</div>
        <div className="product-price-description">
          <div className="product-price product-discount-price">
            <i className="material-icons">currency_rupee</i>{product.price - product.discount}
          </div>
          <div className="product-price product-sell-price">
            <i className="material-icons">currency_rupee</i>
            <s>{product.price}</s>
          </div>
          <div className="product-price product-discount">
            <i className="material-icons">currency_rupee</i>{product.discount} off
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="action-button">
          <button className="btn-basic btn-primary" onClick={takeAction}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
