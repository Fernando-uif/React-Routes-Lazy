import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";
import image from "../public/coffee-mug.png";
import noImage from "../assets/no-image.jpg";

import styles from "../styles/styles.module.css";

export const ProductImage = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { product } = useContext(ProductContext);
  console.log(style);
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={product.img ? image : noImage}
      alt="coffemug"
      style={style}
    />
  );
};
