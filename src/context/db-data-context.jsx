import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const DBdataContext = createContext();

function DBdataProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);
  useEffect(() => {
    async function getCategories() {
      try{
        setCategoriesLoading(true)
        const categoriesData = await axios.get("/api/categories");
        setCategoriesLoading(false)
        setCategories(categoriesData.data.categories)
      }
      catch(error){ 
        setCategoriesLoading(false)
        console.log(error);}
    }
    async function getProducts() {
      try{
        setProductsLoading(true)
        const productsData = await axios.get("/api/products");
        setProductsLoading(false)
        setProducts(productsData.data.products)
      }
      catch(error){
        setProductsLoading(false)
        console.log(error)
      }
    }
    getCategories();
    getProducts();

  }, []);
  return (
    <DBdataContext.Provider value={{ categories, products, productsLoading, categoriesLoading }}>
      {children}
    </DBdataContext.Provider>
  );
}

const useDBdata = () => useContext(DBdataContext);

export { useDBdata, DBdataProvider };
