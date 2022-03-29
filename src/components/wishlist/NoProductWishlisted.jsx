import { Link } from "react-router-dom";
import "./wishlistPage.css";

export function NoProductWishlisted() {
  return (
    <div className="wishlist-page my-5 txt-center txt-bold txt-md">
      <p className="my-2 txt-gray">
        No items present in Wishlist.
      </p>
      <Link to="/products" className=" my-2 txt-primary">
        Start adding to Wishlist!
      </Link>
    </div>
  );
}
