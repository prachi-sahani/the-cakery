import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Home,
  Products,
  Footer,
  LoginPage,
  WishlistPage,
  CartPage,
  SignupPage,
} from "./components/index.jsx";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="wishlist" element={<WishlistPage />}></Route>
        <Route path="cart" element={<CartPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
