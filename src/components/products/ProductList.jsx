import "./products.css";
import "../../styles.css";
import { ProductCard } from "./ProductCard";
import { useProductPageData } from "../../context/product.page.context";
import { FilterTags } from "./FilterTags";

export function ProductList() {
  const { sortedProductArray } =
    useProductPageData();
  return (
    <div className="products">
      <div className="filter-toggle">
        Filter <i className="material-icons">keyboard_double_arrow_right</i>
      </div>

      <FilterTags/>

      <div className="product-list">
        {sortedProductArray.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        {!sortedProductArray.length && <div className="mx-auto h3 py-5">We couldn't find any matches!</div>}
      </div>
    </div>
  );
}
