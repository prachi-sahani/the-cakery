import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import {
  addToCart,
  addToWishlist,
  getProductById,
  removeFromWishlist,
  updateCart,
} from "../../utilities/server-request/server-request";
import "./single-product-page.css";
import "../../styles.css";
import { Loader } from "../loader/Loader";
import { ErrorPage } from "../error-page/ErrorPage";
import { useAuth, useDBdata } from "../../context";
import { useMessageHandling } from "../../context/message-handling";

export function SingleProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noProduct, setNoProduct] = useState(false);
  const [product, setProduct] = useState(false);
  const { dataState, dataDispatch } = useDBdata();
  const { authToken } = useAuth();
  const { showSnackbar } = useMessageHandling();
  const [cartActionText, setCartActionText] = useState("ADD TO CART");
  const [wishlistActionText, setWishlistActionText] =
    useState("ADD TO WISHLIST");

  useEffect(() => {
    window.scrollTo(0, 0);

    if (productId) {
      (async () => {
        try {
          setLoading(true);
          const { data } = await getProductById(productId);
          if (data.product) {
            setProduct(data.product);
            const isProductInWishlist =
              dataState.wishlist?.findIndex(
                (item) => item._id === data.product._id
              ) >= 0;
            if (isProductInWishlist) {
              setWishlistActionText("REMOVE FROM WISHLIST");
            } else {
              setWishlistActionText("ADD TO WISHLIST");
            }
          } else {
            setNoProduct(true);
          }
        } catch (err) {
          console.log(err);
          setError(true);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, []);

  function cartAction() {
    if (authToken) {
      setCartActionText("ADDING...");
      if (cartActionText === "ADD TO CART") {
        const isProductInCart =
          dataState.cart?.findIndex((item) => item._id === product._id) >= 0;
        if (isProductInCart) {
          (async () => {
            try {
              const updatedCart = await updateCart(
                authToken,
                product._id,
                "increment"
              );
              showSnackbar(updatedCart.data.message);
              dataDispatch({ type: "CART", payload: updatedCart.data.cart });
              setCartActionText("GO TO CART");
            } catch (err) {
              setCartActionText("ADD TO CART");
              showSnackbar("Some error occurred. Try Again!");
            }
          })();
        } else {
          (async () => {
            try {
              const updatedCart = await addToCart(authToken, product);
              showSnackbar(updatedCart.data.message);
              dataDispatch({ type: "CART", payload: updatedCart.data.cart });
              setCartActionText("GO TO CART");
            } catch (err) {
              setCartActionText("ADD TO CART");
              showSnackbar("Some error occurred. Try Again!");
            }
          })();
        }
      } else {
        navigate("/cart");
      }
    } else {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }
  function wishlistAction() {
    if (authToken) {
      const isProductInWishlist =
        dataState.wishlist?.findIndex((item) => item._id === product._id) >= 0;
      if (isProductInWishlist) {
        setWishlistActionText("REMOVING...");
        (async () => {
          try {
            const updatedWishlist = await removeFromWishlist(
              authToken,
              product._id
            );
            showSnackbar(updatedWishlist.data.message);
            dataDispatch({
              type: "WISHLIST",
              payload: updatedWishlist.data.wishlist,
            });
            setWishlistActionText("ADD TO WISHLIST");
          } catch (err) {
            setWishlistActionText("REMOVE FROM WISHLIST");
            showSnackbar("Some error occurred. Try Again!");
          }
        })();
      } else {
        (async () => {
          try {
            setWishlistActionText("ADDING...");
            const updatedWishlist = await addToWishlist(authToken, product);
            showSnackbar(updatedWishlist.data.message);
            dataDispatch({
              type: "WISHLIST",
              payload: updatedWishlist.data.wishlist,
            });
            setWishlistActionText("REMOVE FROM WISHLIST");
          } catch (err) {
            setWishlistActionText("ADD TO WISHLIST");
            showSnackbar("Some error occurred. Try Again!");
          }
        })();
      }
    } else {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }
  return (
    <main className="single-product-page p-3">
      {loading && <Loader />}
      {error && <ErrorPage />}
      {noProduct && (
        <div className="w-100 my-5 txt-bold h3 txt-center txt-gray">
          <p>No product found!</p>
        </div>
      )}
      {!loading && !error && product && !noProduct && (
        <Fragment>
          <div className="image-section p-3">
            <img
              src={`/${product.image}`}
              alt={product.title}
              className="w-100"
            />
            <div className="btn-action">
              <button
                className="btn-basic btn-primary"
                disabled={cartActionText === "ADDING..."}
                onClick={cartAction}
              >
                {cartActionText}
              </button>
              <button
                className="btn-basic btn-outline-primary"
                disabled={
                  cartActionText === "ADDING..." ||
                  cartActionText === "REMOVING..."
                }
                onClick={wishlistAction}
              >
                {wishlistActionText}
              </button>
            </div>
          </div>
          <div className="details-section p-3">
            <div className="detail-section-header">
              <h3 className="product-title heading h2">{product.title}</h3>
              {/* <i className="btn-icon btn-sm material-icons">share</i> */}
            </div>
            <div className="rating-read-only single-product-rating">
              <p className=" txt txt-bold txt-gray px-2">{product.rating}</p>
              {[5, 4, 3, 2, 1].map((star) => (
                <Fragment key={`${star}-stars`}>
                  <input
                    type="radio"
                    id={`${star}-stars`}
                    name="rating-read-only"
                    value={star}
                    checked={star === Math.round(product.rating)}
                    disabled
                  />
                  <label htmlFor={`${star}-stars`} className="star">
                    <i className="material-icons">star</i>
                  </label>
                </Fragment>
              ))}
            </div>
            <div className="product-price-description mt-3 mb-1">
              <div className="product-price  single-product-price">
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
            <div className="p-2 mt-2">
              <h4 className="heading h4">Description:</h4>
              <p className="txt">{product.description}</p>
            </div>
            {product.deliveryInformation && (
              <div className="p-2">
                <h4 className="heading h4">Delivery Information:</h4>
                <ul className="list-group-bulleted">
                  {product.deliveryInformation
                    .split("\n")
                    .map((item, index) => (
                      <li key={`${index}${item}`} className="list-item">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {product.careInstructions && (
              <div className="p-2">
                <h4 className="heading h4">Care Instructions:</h4>
                <ul className="list-group-bulleted">
                  {product.careInstructions.split("\n").map((item, index) => (
                    <li key={index} className="list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </main>
  );
}
