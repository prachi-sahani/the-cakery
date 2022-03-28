import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDBdata } from "../../context/index";
import { CategoryCard } from "./CategoryCard";
import { Loader } from "../loader/Loader";
import { getCategories } from "../../utilities/server-request/server-request";
import "./home.css";

export function Home() {
  const {dataState, dataDispatch } = useDBdata();
  useEffect(() => {
    if (!dataState.categories.length) {
      (async () => {
        const categoriesData = await getCategories(dataDispatch);
        dataDispatch({ type: "CATEGORIES", payload: categoriesData.data.categories });
      })()
    }
  },[])
  return (
    <main>
      {/* hero image */}
      <div className="hero-section">
        <div className="hero-text heading h2">
          <img src="assets/hero-logo.png" alt="Cakery" />
          <em>Happiness in every bite!</em>
          <Link to="/products" className="btn-basic btn-primary btn-md link">
            Order Now
          </Link>
        </div>
        <img
          className="img-hero"
          src="assets/hero-image.jpg"
          alt="celebrations"
        ></img>
      </div>

      {/* category list */}
       
      <div className="category-cards my-2">
        {dataState.categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div> 
      {!dataState.categories.length && <Loader/>}

    </main>
  );
}
