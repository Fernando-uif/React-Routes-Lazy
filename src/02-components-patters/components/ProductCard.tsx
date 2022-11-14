import styles from "../styles/styles.module.css";
import image from "../public/coffee-mug.png";
import noImage from "../assets/no-image.jpg";
import { useState } from "react";
import { useProduct } from "../hooks/useProduct";

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <>
      <div className={styles.productCard}>
        <img className={styles.productImg} src={noImage} alt="coffemug" />
        <span className={styles.productDescription}>Coffe Mug</span>
        <div className={styles.buttonsContainer}>
          <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
            -
          </button>
          <div className={styles.countLabel}>{counter}</div>
          <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
