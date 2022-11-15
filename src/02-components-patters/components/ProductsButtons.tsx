import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

import styles from "../styles/styles.module.css";

export const ProductsButtons = ({ className }: {className?:string}) => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};
