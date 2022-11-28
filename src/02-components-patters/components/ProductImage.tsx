import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";
import noImage from "../assets/no-image.jpg";
import { getImageUrl } from '../../helpers/getImage';

import styles from "../styles/styles.module.css";

export const ProductImage = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { product } = useContext(ProductContext);
  console.log(product.img,'Tenemos el producto que dontiene product.imb');
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={product.img ? getImageUrl(product.img) : noImage}
      alt="coffemug"
      style={style}
    />
  );
};
