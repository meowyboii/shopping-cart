import styles from "../styles/Products.module.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, title, price, description, image }) => {
  return (
    <Link to={`product/${id}`} className={styles.product}>
      <img src={image} alt={title} />
      <h2 id={styles.title}>{title}</h2>
      <h3 id={styles.description}>{description}</h3>
      <p>$ {price}</p>
    </Link>
  );
};
