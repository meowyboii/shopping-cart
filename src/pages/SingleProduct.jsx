import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Products.module.css";

const useProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const productData = await response.json();
        setProduct(productData);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
        console.log(product);
      }
    };
    getProduct();
  }, []);
  return { product, error, loading };
};

export const SingleProduct = () => {
  const { product, error, loading } = useProduct();
  return (
    <div className={styles.container}>
      {error && <span className={styles.error}>{error}</span>}
      {loading && <span>Product is still loading...</span>}
      {product && (
        <div className={styles.product}>
          <img src={product.images[0]} alt={product.title} />
          <h2 id={styles.title}>{product.title}</h2>
          <h3 id={styles.description}>{product.description}</h3>
          <p>$ {product.price}</p>
        </div>
      )}
    </div>
  );
};
