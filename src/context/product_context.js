import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      setProducts(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductByID = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      setProduct(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProduct,
        getProductByID,
        product,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
