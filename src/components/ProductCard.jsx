import styles from "../styles/Products.module.css";

export const ProductCard = ({ title, price, description, image }) => {
  return (
    <div className={styles.product}>
      <img src={image} alt={title} />
      <h2 id={styles.title}>{title}</h2>
      <h3 id={styles.description}>{description}</h3>
      <span>$ {price}</span>
    </div>
  );
};
