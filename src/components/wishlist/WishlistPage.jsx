import "./wishlistPage.css";
import { useDBdata, useAuth } from "../../context/index";
import { useEffect, useState } from "react";
import { getWishlist } from "../../utilities/server-request/server-request";
import { useNavigate } from "react-router-dom";
import { WishlistItemCard } from "./WishlistItemCard";
import { NoProductWishlisted } from "./NoProductWishlisted";
import { Loader } from "../loader/Loader";
import { ErrorPage } from "../error-page/ErrorPage";

export function WishlistPage() {
  const { dataState, dataDispatch } = useDBdata();
  const { authToken } = useAuth();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  useEffect(() => {
    if (authToken) {
      if (!dataState.cart) {
        setLoader(true);
        (async () => {
          const wishlistItems = await getWishlist(authToken);
          setLoader(false);
          if (wishlistItems) {
            dataDispatch({
              type: "WISHLIST",
              payload: wishlistItems?.data.wishlist,
            });
          } else {
            // when api fails
            setErrorOccurred(true);
          }
        })();
      }
    } else {
      // when user is not logged in
      localStorage.setItem("lastRoute", "/wishlist"); //for to redirect to same page after user login
      navigate("/login");
    }
  }, []);
  
  return (
    <main className="wishlist-page">
      {errorOccurred && <ErrorPage />}
      {loader && <Loader />}

      {/* no product page */}
      {dataState.wishlist?.length===0 && !loader && <NoProductWishlisted />}

      {dataState.wishlist?.length > 0 && !loader && (
        <div className="products">
          <p className="txt txt-md txt-gray txt-my-wishlist px-3">
            <strong>My Wishlist</strong>({dataState.wishlist?.length})
          </p>
          <div className="product-list">
            {dataState.wishlist.map((product) => (
              <WishlistItemCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
