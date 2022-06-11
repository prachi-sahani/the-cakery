import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, useDBdata } from "../../context/index";
import { getCartItem } from "../../utilities/server-request/server-request";
import { CartItemCard } from "./CartItemCard";
import { NoItemInCart } from "./NoItemInCart";
import { Loader } from "../loader/Loader";
import { ErrorPage } from "../error-page/ErrorPage";
import "./cartPage.css";

export function CartPage() {
  const { dataState, dataDispatch } = useDBdata();
  const { authToken } = useAuth();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [priceDetails, setPriceDetails] = useState({
    totalPrice: 0,
    totalDiscount: 0,
    deliveryCharges: 50,
  });
  function calculatePriceDetails(cartItems) {
    let details = { totalPrice: 0, totalDiscount: 0, deliveryCharges: 50 };
    cartItems.forEach((productInCart) => {
      details = {
        ...details,
        totalPrice:
          details.totalPrice + productInCart.price * productInCart.qty,
        totalDiscount:
          details.totalDiscount + productInCart.discount * productInCart.qty,
      };
    });
    setPriceDetails(details);
  }
  useEffect(() => {
    if (!dataState.cart) {
      setLoader(true);
      (async () => {
        try {
          const cartItems = await getCartItem(authToken);
          setLoader(false);
          dataDispatch({ type: "CART", payload: cartItems?.data.cart });
          calculatePriceDetails(cartItems.data.cart);
        } catch (err) {
          setLoader(false);
          setError(true);
        }
      })();
    } else {
      calculatePriceDetails(dataState.cart);
    }
  }, []);

  return (
    <main className="cart-management">
      {error && <ErrorPage />}
      {loader && <Loader />}
      {dataState.cart?.length === 0 && <NoItemInCart />}
      {dataState.cart?.length > 0 && (
        <div className="cart-products-list p-2">
          <p className="txt txt-bold txt-gray txt-md px-3">
            My Cart ({dataState.cart?.length})
          </p>

          {dataState.cart.map((item) => (
            <CartItemCard
              key={item._id}
              item={item}
              calculatePriceDetails={calculatePriceDetails}
            />
          ))}
        </div>
      )}
      {dataState.cart?.length > 0 && (
        <div className="cart-value-details p-2">
          <div className="card card-basic">
            <div className="card-header">
              <h3 className="txt txt-bold txt-md txt-gray">Price Details</h3>
              <hr />
            </div>
            <div className="card-content">
              <div className="price-details">
                <p className="txt">Price({dataState.cart?.length})</p>
                <p className="pricing txt txt-left">
                  <i className="material-icons">currency_rupee</i>
                  {priceDetails.totalPrice}
                </p>
              </div>
              <div className="price-details">
                <p className="txt">Discount</p>
                <p className="pricing txt txt-left">
                  <i className="material-icons">currency_rupee</i>
                  {priceDetails.totalDiscount}
                </p>
              </div>
              <div className="price-details">
                <p className="txt">Delivery Charges</p>
                <p className="pricing txt txt-left">
                  <i className="material-icons">currency_rupee</i>
                  {priceDetails.deliveryCharges}
                </p>
              </div>
              <hr />
              <div className="price-details">
                <p className="txt txt-bold txt-md">Total Price</p>
                <p className="pricing txt txt-left">
                  <i className="material-icons">currency_rupee</i>
                  {priceDetails.totalPrice -
                    priceDetails.totalDiscount +
                    priceDetails.deliveryCharges}
                </p>
              </div>
              <hr className="txt-gray" />
            </div>
            <div className="card-footer ">
              <Link
                to="/"
                className="btn-place-order btn-basic btn-w-icon btn-primary"
              >
                <i className="material-icons">local_shipping</i> Place Order
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
