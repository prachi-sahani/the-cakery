import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        {/* <Route path="/wishlist" element={<Home/>}></Route>
        <Route path="/cart" element={<Home/>}></Route>
        <Route path="/login" element={<Home/>}></Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
