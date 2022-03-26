import "./products.css";
import "../../styles.css";
import { useProductPageData } from "../../context/product.page.context";

export function FilterSection() {
  const { filterSortState, filterSortDispatch } = useProductPageData();
  return (
    <div className="filter-section p-4">
      <div className="txt txt-bold">Sorting</div>

      {/* sort by discounted price */}
      <p className="txt radio-input-group">
        <input
          type="radio"
          name="sort-category"
          checked={filterSortState.sortBy === "HIGH_TO_LOW"}
          onChange={() =>
            filterSortDispatch({
              type: "SORT_BY",
              payload: "HIGH_TO_LOW",
            })
          }
        />
        <label htmlFor="sort-category">High to Low</label>
      </p>
      <p className="txt radio-input-group">
        <input
          type="radio"
          name="sort-category"
          checked={filterSortState.sortBy === "LOW_TO_HIGH"}
          onChange={() =>
            filterSortDispatch({
              type: "SORT_BY",
              payload: "LOW_TO_HIGH",
            })
          }
        />
        <label htmlFor="sort-category">Low to High</label>
      </p>
      <div className="txt txt-bold pt-3 filters">
        <p>Filters</p>
        <button
          onClick={(e) =>
            filterSortDispatch({
              type: "CLEAR_ALL",
            })
          }
          className="btn-clear-all"
        >
          Clear All
        </button>
      </div>

      {/* filter by category */}
      <div className="txt txt-bold filter-category">Category</div>
      <p className="txt checkbox-input-group">
        <input
          type="checkbox"
          name="category"
          value="cake"
          checked={
            filterSortState.filterByCategory.findIndex(
              (item) => item === "CAKES"
            ) < 0
              ? false
              : true
          }
          onChange={(e) =>
            filterSortDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: { checked: e.target.checked, value: "CAKES" },
            })
          }
        />
        <label htmlFor="category">Cakes</label>
      </p>
      <p className="txt checkbox-input-group">
        <input
          type="checkbox"
          name="category"
          value="cupcake"
          checked={
            filterSortState.filterByCategory.findIndex(
              (item) => item === "PASTRIES"
            ) < 0
              ? false
              : true
          }
          onChange={(e) =>
            filterSortDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: { checked: e.target.checked, value: "PASTRIES" },
            })
          }
        />
        <label htmlFor="price">Pastries</label>
      </p>
      <p className="txt checkbox-input-group">
        <input
          type="checkbox"
          name="category"
          value="brownie"
          checked={
            filterSortState.filterByCategory.findIndex(
              (item) => item === "BROWNIES"
            ) < 0
              ? false
              : true
          }
          onChange={(e) =>
            filterSortDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: { checked: e.target.checked, value: "BROWNIES" },
            })
          }
        />
        <label htmlFor="price">Brownies</label>
      </p>
      <p className="txt checkbox-input-group">
        <input
          type="checkbox"
          name="category"
          value="chocolate"
          checked={
            filterSortState.filterByCategory.findIndex(
              (item) => item === "CHOCOLATES"
            ) < 0
              ? false
              : true
          }
          onChange={(e) =>
            filterSortDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: { checked: e.target.checked, value: "CHOCOLATES" },
            })
          }
        />
        <label htmlFor="category">Chocolates</label>
      </p>
      <p className="txt checkbox-input-group">
        <input
          type="checkbox"
          name="category"
          value="donut"
          checked={
            filterSortState.filterByCategory.findIndex(
              (item) => item === "DONUTS"
            ) < 0
              ? false
              : true
          }
          onChange={(e) =>
            filterSortDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: { checked: e.target.checked, value: "DONUTS" },
            })
          }
        />
        <label htmlFor="category">Donuts</label>
      </p>
      <p className="txt checkbox-input-group">
        <input
          type="checkbox"
          name="category"
          value="jarDesert"
          checked={
            filterSortState.filterByCategory.findIndex(
              (item) => item === "JAR DESERTS"
            ) < 0
              ? false
              : true
          }
          onChange={(e) =>
            filterSortDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: { checked: e.target.checked, value: "JAR DESERTS" },
            })
          }
        />
        <label htmlFor="category">Jar deserts</label>
      </p>
      <p className="txt checkbox-input-group">
        <input
          type="checkbox"
          name="category"
          value="giftHamper"
          checked={
            filterSortState.filterByCategory.findIndex(
              (item) => item === "GIFT HAMPER"
            ) < 0
              ? false
              : true
          }
          onChange={(e) =>
            filterSortDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: { checked: e.target.checked, value: "GIFT HAMPER" },
            })
          }
        />
        <label htmlFor="category">Gift Hampers</label>
      </p>

      {/* filter by price */}
      <div className="txt txt-bold filter-category">Price(in ₹)</div>
      <label>
        <input
          value={filterSortState.filterByPrice}
          type="range"
          step="500"
          min="0"
          max="2000"
          className="priceFilterInput"
          list="tickmarks"
          onChange={(e) =>
            filterSortDispatch({
              type: "FILTER_BY_PRICE",
              payload: Number(e.target.value),
            })
          }
        />
        <div className="priceFilterLabel">
          <span>0</span>
          <span>500</span>
          <span>1k</span>
          <span>1.5k</span>
          <span>2k</span>
        </div>
      </label>

      {/* filter by rating */}
      <div className="txt txt-bold filter-category">Rating</div>
      <p className="txt radio-input-group">
        <input
          type="radio"
          name="rating"
          checked={filterSortState.filterByRating === 4}
          onChange={() =>
            filterSortDispatch({ type: "FILTER_BY_RATING", payload: 4 })
          }
        />
        <label htmlFor="rating" className="filter-rating-label">
          4 <i className="material-icons filter-rating-icon">star</i> & up
        </label>
      </p>
      <p className="txt radio-input-group">
        <input
          type="radio"
          name="rating"
          checked={filterSortState.filterByRating === 3}
          onChange={() =>
            filterSortDispatch({ type: "FILTER_BY_RATING", payload: 3 })
          }
        />
        <label htmlFor="rating" className="filter-rating-label">
          3 <i className="material-icons filter-rating-icon">star</i> & up
        </label>
      </p>
      <p className="txt radio-input-group">
        <input
          type="radio"
          name="rating"
          checked={filterSortState.filterByRating === 2}
          onChange={() =>
            filterSortDispatch({ type: "FILTER_BY_RATING", payload: 2 })
          }
        />
        <label htmlFor="rating" className="filter-rating-label">
          2 <i className="material-icons filter-rating-icon">star</i> & up
        </label>
      </p>
      <p className="txt radio-input-group">
        <input
          type="radio"
          name="rating"
          checked={filterSortState.filterByRating === 1}
          onChange={() =>
            filterSortDispatch({ type: "FILTER_BY_RATING", payload: 1 })
          }
        />
        <label htmlFor="rating" className="filter-rating-label">
          1 <i className="material-icons filter-rating-icon">star</i> & up
        </label>
      </p>
    </div>
  );
}
