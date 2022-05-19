import "./wishlistPage.css";
import { useDBdata, useAuth } from "../../context/index";
import { useEffect, useState } from "react";
import { getWishlist } from "../../utilities/server-request/server-request";
import { WishlistItemCard } from "./WishlistItemCard";
import { NoProductWishlisted } from "./NoProductWishlisted";
import { Loader } from "../loader/Loader";
import { ErrorPage } from "../error-page/ErrorPage";

export function WishlistPage() {
  const { dataState, dataDispatch } = useDBdata();
  const { authToken } = useAuth();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
      if (!dataState.cart) {
        setLoader(true);
        (async () => {
          try {
            const wishlistItems = await getWishlist(authToken);
            setLoader(false);
            dataDispatch({
              type: "WISHLIST",
              payload: wishlistItems?.data.wishlist,
            });
          } catch (err) {
            // when api fails
            setLoader(false);
            setError(true);
          }
        })();
      }
  }, []);

  return (
    <main className="wishlist-page">
      {error && <ErrorPage />}
      {loader && <Loader />}

      {/* no product page */}
      {dataState.wishlist?.length === 0 && !loader && <NoProductWishlisted />}

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
