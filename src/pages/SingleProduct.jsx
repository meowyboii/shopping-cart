import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Products.module.css";
import style from "../styles/SingleProduct.module.css";
import { Navbar } from "../components/Navbar";

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
      }
    };
    getProduct();
  }, [id]);
  return { product, error, loading };
};

export const SingleProduct = () => {
  const { product, error, loading } = useProduct();
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quantity);
  };

  return (
    <>
      <Navbar />
      <div className={style.container}>
        {error && <span className={styles.error}>{error}</span>}
        {loading && <span>Product is still loading...</span>}
        {product && (
          <div className={style.product}>
            <img src={product.images[0]} alt={product.title} />
            <div className={style["product-details"]}>
              <h2>{product.title}</h2>
              <h2>${product.price}</h2>
              <h3>{product.description}</h3>
              <hr></hr>
              <div className={style.images}>
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt="" />
                ))}
              </div>
              <form method="post">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  required
                  min={1}
                  max={50}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
