import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav>
      <div className={styles.section}>
        <div id={styles.logo}>LOGO</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>New</li>
          <li>Textile</li>
          <li>Sneakers</li>
          <li>Accessory</li>
        </ul>
      </div>
      <div className={styles.section}>
        <div id={styles["search-bar"]}>
          <input type="text" placeholder="Search.." />
          <FaSearch id={styles.search} />
        </div>
        <FaRegUser id={styles.profile} />
        <Link to="cart">
          <AiOutlineShoppingCart id={styles.cart} />
        </Link>
      </div>
    </nav>
  );
};
