import { useEffect } from "react";
import { useDBdata } from "../../context/index";
import { getProducts } from "../../utilities/server-request/server-request";
import { Loader } from "../loader/Loader";
import { FilterSection } from "./FilterSection";
import { ProductList } from "./ProductList";

export function Products() {
  const { dataState, dataDispatch } = useDBdata();
  useEffect(() => {
    if (!dataState.products.length) {
      (async () => {
        const productsData =  await getProducts();
        dataDispatch({ type: "PRODUCTS", payload: productsData.data.products });
      }
      )()
    }
  },[])
  return (
      <main className="product-page">
        {dataState.products.length>0 && <FilterSection />}
        {dataState.products.length>0 && <ProductList />}
        {dataState.products.length === 0 && <Loader />}
      </main>
  );
}
