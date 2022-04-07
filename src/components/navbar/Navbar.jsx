import "./navbar.css";
import "../../styles.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth, useDBdata } from "../../context/index";
import { useState } from "react";

export function Navbar() {
  const { authToken, logout } = useAuth();
  const { dataState } = useDBdata();
  const [showMenu, setShowMenu] = useState(false);
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
            <NavLink className={({isActive}) => isActive? "txt-bold link" : "link"} to="/">
              <li className="txt-primary list-item">Home</li>
            </NavLink>
            <NavLink className={({isActive}) => isActive? "txt-bold link" : "link"} to="/products">
              <li className="txt-primary list-item">Order Now</li>
            </NavLink>
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
                <div className="badge-icon-text badge-count">
                  {dataState.cart?.length || 0}
                </div>
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
          <button
            className="navbar-menu-btn btn-basic btn-outline-primary material-icons btn-md"
            onClick={() => setShowMenu((value) => !value)}
          >
            menu
          </button>
          {showMenu && (
            <ul className="navbar-menu-list list-group-stacked">
              {/* will add account page later */}
              {/* <NavLink className={({isActive}) => isActive? "txt-primary link" : "link"} to="/"  onClick={() => setShowMenu(false)}>
                <li className="txt-primary list-w-icon list-item"><i className="material-icons">add</i>Account</li>
              </NavLink> */}
              <Link
                className="link"
                to="/cart"
                onClick={() => setShowMenu(false)}
              >
                <li className="txt-primary list-w-icon list-item"><i className="material-icons">shopping_cart</i>Shopping Bag</li>
              </Link>
              <Link
                className="link"
                to="/wishlist"
                onClick={() => setShowMenu(false)}
              >
                <li className="txt-primary list-w-icon list-item"><i className="material-icons">favorite</i>Wishlist</li>
              </Link>
              {authToken ? (
                <Link
                  className="link"
                  to="/"
                  onClick={() => {
                    setShowMenu(false);
                    logout();
                  }}
                >
                  <li className="txt-primary list-w-icon list-item"><i className="material-icons">logout</i>Logout</li>
                </Link>
              ) : (
                <Link
                  className="link"
                  to="/login"
                  onClick={() => setShowMenu(false)}
                >
                  <li className="txt-primary list-w-icon list-item"><i className="material-icons">login</i>Signup/Login </li>
                </Link>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
