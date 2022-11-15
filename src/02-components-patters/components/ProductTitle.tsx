import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

import styles from "../styles/styles.module.css";

export const ProductTitle = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  const { product } = useContext(ProductContext);
  console.log(title, "Tenemos el title");
  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
