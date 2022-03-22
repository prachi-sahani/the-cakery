import "./navbar.css";
import "../../styles.css";
import { Link } from "react-router-dom";
export function Navbar(){
    return(
        <nav className="nav">
        <div className="navbar">
            <Link className="link" to="/"><img className="navbar-brand logo" src="assets/logo.png" alt="Cakery"></img></Link>
            <div className="navbar-nav">
                <ul className="list-group-inline navbar-nav-list">
                    <Link className="link" to="/"> <li className="txt-primary list-item">Home</li></Link>
                    <Link className="link" to="/products"> <li className="txt-primary list-item">Order Now</li></Link>
                </ul>
                <div className="navbar-action">
                    <Link to="/" className="btn-link btn-icon btn-outline-primary material-icons link">favorite</Link>
                    <Link to="/" className="btn-link btn-icon btn-outline-primary material-icons link">shopping_cart</Link>
                    <Link to="/" className="btn-link btn-icon btn-outline-primary material-icons link">account_circle</Link>
                    <Link to="/" className="btn-basic btn-primary btn-sm link">LOGIN/SIGNUP</Link>
                </div>
            </div>
            <div className="navbar-menu">
                <button className="navbar-menu-btn btn-basic btn-outline-primary material-icons btn-md">menu</button>
                <ul className="navbar-menu-list list-group-stacked">
                   <Link className="link" to="/"> <li className="txt-primary list-item">Signup/Login </li> </Link>
                   <Link className="link" to="/"> <li className="txt-primary list-item">Account</li> </Link>
                   <Link className="link" to="/"> <li className="txt-primary list-item">Shopping Bag</li> </Link>
                   <Link className="link" to="/"> <li className="txt-primary list-item">Wishlist</li> </Link>
                </ul>
            </div>
        </div>
    </nav>   
    );
}