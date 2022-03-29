import "./navbar.css";
import "../../styles.css";
import { Link } from "react-router-dom";
import { useAuth, useDBdata } from "../../context/index";

export function Navbar() {
  const { authToken, logout } = useAuth();
  const { dataState } = useDBdata();
  return (
    <nav className="nav">
      <div className="navbar">
        <Link className="link" to="/">
          <img
            className="navbar-brand logo"
            src="assets/logo.png"
            alt="Cakery"
          ></img>
        </Link>
        <div className="navbar-nav">
          <ul className="list-group-inline navbar-nav-list">
            <Link className="link" to="/">
              <li className="txt-primary list-item">Home</li>
            </Link>
            <Link className="link" to="/products">
              <li className="txt-primary list-item">Order Now</li>
            </Link>
          </ul>
          <div className="navbar-action">
            {authToken ? (
              <div className="badge badge-icon-md">
                <Link
                  to="/wishlist"
                  className="btn-link btn-icon btn-outline-primary material-icons"
                >
                  favorite
                </Link>
                <div className="badge-icon-text badge-count">
                  {dataState.wishlist?.length || 0}
                </div>
              </div>
            ) : (
              <Link
                to="/wishlist"
                className="btn-link btn-icon btn-outline-primary material-icons link"
              >
                favorite
              </Link>
            )}
            {authToken ? (
              <div className="badge badge-icon-md">
                <Link
                  to="/cart"
                  className="btn-link btn-icon btn-outline-primary material-icons"
                >
                  shopping_cart
                </Link>
                <div className="badge-icon-text badge-count">{dataState.cart?.length || 0}</div>
              </div>
            ) : (
              <Link
                to="/cart"
                className="btn-link btn-icon btn-outline-primary material-icons link"
              >
                shopping_cart
              </Link>
            )}
            <Link
              to="/"
              className="btn-link btn-icon btn-outline-primary material-icons link"
            >
              account_circle
            </Link>
            {authToken ? (
              <button
                onClick={logout}
                className="btn-basic btn-primary btn-sm link"
              >
                LOGOUT
              </button>
            ) : (
              <Link to="/login" className="btn-basic btn-primary btn-sm link">
                LOGIN/SIGNUP
              </Link>
            )}
          </div>
        </div>
        <div className="navbar-menu">
          <button className="navbar-menu-btn btn-basic btn-outline-primary material-icons btn-md">
            menu
          </button>
          <ul className="navbar-menu-list list-group-stacked">
            <Link className="link" to="/">
              <li className="txt-primary list-item">Signup/Login </li>
            </Link>
            <Link className="link" to="/">
              <li className="txt-primary list-item">Account</li>
            </Link>
            <Link className="link" to="/">
              <li className="txt-primary list-item">Shopping Bag</li>
            </Link>
            <Link className="link" to="/">
              <li className="txt-primary list-item">Wishlist</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
