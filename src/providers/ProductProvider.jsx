import { useEffect, useState } from "react";
import { ProductContext } from "../context";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, loading, setLoading, error, setError }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
