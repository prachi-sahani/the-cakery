import { createContext, useContext, useReducer } from "react";
import { useDBdata } from "./db-data-context";
import { filterSortReducer } from "../reducers/filterSortReducer";
import{getFilteredProductArray, getSortedProductArray, getFiltersList } from '../utilities/filter/index'
const ProductPageContext = createContext();

function ProductProvider({ children }) {
  const { dataState } = useDBdata();
  const [filterSortState, filterSortDispatch] = useReducer(filterSortReducer, {
    sortBy: "",
    filterByCategory: [],
    filterByRating: 0,
    filterByPrice: 2000,
  });
 
  const filteredProductArray = getFilteredProductArray(
    filterSortState,
    dataState.products
  );
  const sortedProductArray = getSortedProductArray(
    filterSortState.sortBy,
    filteredProductArray
  );
  const filtersList = getFiltersList(filterSortState);
  return (
    <ProductPageContext.Provider
      value={{
        filterSortState,
        filterSortDispatch,
        sortedProductArray,
        filtersList,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
}

const useProductPageData = () => useContext(ProductPageContext);

export { ProductProvider, useProductPageData };
