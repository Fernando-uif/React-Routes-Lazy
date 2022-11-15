import { useContext } from 'react';

import { ProductContext } from '../context/ProductContext';

import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductContext);
    console.log(title, "Tenemos el title");
    return (
      <span className={styles.productDescription}>
        {title ? title : product.title}
      </span>
    );
  };
  