import { useDBdata } from "../../context/db-data-context";
import { ProductProvider } from "../../context/product.page.context";
import { Loader } from "../loader/Loader";
import { FilterSection } from "./FilterSection";
import { ProductList } from "./ProductList";
export function Products() {
  const { productsLoading } = useDBdata();
  return (
    <ProductProvider>
      <main className="product-page">
        {!productsLoading && <FilterSection />}
        {!productsLoading && <ProductList />}
        {productsLoading && 
          <Loader/>
        }
      </main>
    </ProductProvider>
  );
}
