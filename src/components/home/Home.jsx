import { Link } from "react-router-dom";
import { useDBdata } from "../../context/db-data-context";
import { CategoryCard } from "./CategoryCard";
import "./home.css";

export function Home() {
  const { categories } = useDBdata();
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
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </main>
  );
}
