import { createContext, ReactElement, useContext } from "react";

import { Props } from "../interfaces/Product";
import { useProduct } from "../hooks/useProduct";
import { ProductContext } from "../context/ProductContext";

import styles from "../styles/styles.module.css";



export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <>
      <ProductContext.Provider
        value={{
          counter,
          increaseBy,
          product,
        }}
      >
        <div className={styles.productCard}>{children}</div>
      </ProductContext.Provider>
    </>
  );
};
