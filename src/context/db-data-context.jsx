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
  useEffect(() => {
    async function getCategories() {
      const categoriesData = await axios.get("/api/categories");
      setCategories(categoriesData.data.categories)
    }
    getCategories();

  }, []);

  return (
    <DBdataContext.Provider value={{ categories: categories }}>
      {children}
    </DBdataContext.Provider>
  );
}

const useDBdata = () => useContext(DBdataContext);

export { useDBdata, DBdataProvider };
