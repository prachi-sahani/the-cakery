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
  SingleProductPage,
} from "./components/index.jsx";
import { RequireAuth } from "./components/require-auth/RequireAuth";
import { Snackbar } from "./components/snackbar/Snackbar";
import { useMessageHandling } from "./context/message-handling";

function App() {
  const { errorMessage } = useMessageHandling();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route
          path="products/:productId"
          element={<SingleProductPage />}
        ></Route>
        <Route
          path="wishlist"
          element={
            <RequireAuth>
              <WishlistPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        ></Route>
         
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
      </Routes>
      {errorMessage && <Snackbar />}
      <Footer />
    </div>
  );
}

export default App;
