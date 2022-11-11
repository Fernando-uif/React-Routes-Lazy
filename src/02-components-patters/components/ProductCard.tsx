import styles from "../styles/styles.module.css";
import image from "../public/coffee-mug.png";
import noImage from "../assets/no-image.jpg";

export const ProductCard = () => {
  return (
    <>
      <div className={styles.productCard}>
        <img className={styles.productImg} src={noImage} alt="coffemug" />
        <span className={styles.productDescription}>Coffe Mug</span>
        <div className={styles.buttonsContainer}>
          <button className={styles.buttonMinus}>-</button>
          <div className={styles.countLabel}>0</div>
          <button className={styles.buttonAdd}>+</button>
        </div>
      </div>
    </>
  );
};
