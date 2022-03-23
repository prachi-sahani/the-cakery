import { Link } from "react-router-dom";
import "./home.css";

export function CategoryCard({category}){
    return(
        <Link to="/products" className="link card card-basic">
        <img
          className="card-content"
          src={category.image}
          alt="cakes"
        ></img>
        <div className="card-header">
          <div className="card-title">{category.categoryName}</div>
        </div>
      </Link>
    )
}