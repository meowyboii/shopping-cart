/* eslint-disable react/prop-types */
import styles from "../styles/Products.module.css";
import { ProductCard } from "./ProductCard";
export const Products = ({ products, error, loading }) => {
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <div className={styles.products}>
        {error && <span className={styles.error}>{error}</span>}
        {loading && <span>Products are loading...</span>}
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
};
