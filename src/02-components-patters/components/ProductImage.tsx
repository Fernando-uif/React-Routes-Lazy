import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";
import image from "../public/coffee-mug.png";
import noImage from "../assets/no-image.jpg";

import styles from "../styles/styles.module.css";

export const ProductImage = () => {
  const { product } = useContext(ProductContext);
  return (
    <img
      className={styles.productImg}
      src={product.img ? image : noImage}
      alt="coffemug"
    />
  );
};
