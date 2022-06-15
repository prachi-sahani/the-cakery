import { Link, useNavigate } from "react-router-dom";
import { useProductPageData } from "../../context";
import "./home.css";

export function CategoryCard({category}){
  const { filterSortDispatch } = useProductPageData();
  const navigate = useNavigate()
  function openCategoryPage(categoryIdentity){
    filterSortDispatch({
      type: "CLEAR_ALL",
    })
    filterSortDispatch({
      type: "FILTER_BY_CATEGORY",
      payload: { checked: true, value: categoryIdentity }
    })
    navigate("/products")
  }
    return(
        <div onClick={() => openCategoryPage(category.categoryIdentity)} className="link card card-basic">
        <img
          loading="lazy"
          className="card-content"
          src={category.image}
          alt="cakes"
        ></img>
        <div className="card-header">
          <div className="card-title">{category.categoryName}</div>
        </div>
      </div>
    )
}