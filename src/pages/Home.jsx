import { useEffect, useState } from "react";
import "../styles/Home.css";
import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Products } from "../components/Products";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=8&limit=8"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const productData = await response.json();
        setProducts(productData);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
        console.log(products);
      }
    };
    getProducts();
  }, []);
  return { products, error, loading };
};
export const Home = () => {
  const { products, error, loading } = useProducts();
  return (
    <>
      <Navbar />
      <Banner />
      <Products products={products} error={error} loading={loading} />
    </>
  );
};
