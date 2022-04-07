import { useEffect,useState } from "react";
import { useDBdata } from "../../context/index";
import { getProducts } from "../../utilities/server-request/server-request";
import { ErrorPage } from "../error-page/ErrorPage";
import { Loader } from "../loader/Loader";
import { FilterSection } from "./FilterSection";
import { ProductList } from "./ProductList";

export function Products() {
  const { dataState, dataDispatch } = useDBdata();
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState(false);
  useEffect(() => {
    if (!dataState.products.length) {
      (async () => {
        try{
          setLoading(true);
          const productsData =  await getProducts();
          setLoading(false);
          dataDispatch({ type: "PRODUCTS", payload: productsData.data.products });
        }
        catch(err){
          setLoading(false);
          setError(true);
        }
      }
      )()
    }
  },[])
  return (
      <main className="product-page">
        {dataState.products.length>0 && <FilterSection />}
        {dataState.products.length>0 && <ProductList />}
        {loading && <Loader />}
        {error && <ErrorPage/>}
      </main>
  );
}
