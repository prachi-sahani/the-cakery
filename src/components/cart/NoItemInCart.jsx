import { Link } from "react-router-dom";
import "./cartPage.css"

export function NoItemInCart() {
  return (
    <div className="empty-cart w-100 txt-bold txt-md txt-center my-5">
      <div className="txt-gray">
        No items present in Cart.
      </div>
      <Link to="/products" className="txt-primary">
        Continue shopping!
      </Link>
    </div>
  );
}
