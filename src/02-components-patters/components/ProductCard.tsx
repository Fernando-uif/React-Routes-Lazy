import { ReactElement } from "react";

import { Product } from "../interfaces/Product";
import { useProduct } from "../hooks/useProduct";
import image from "../public/coffee-mug.png";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export const ProductImage = ({ img = false }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? image : noImage}
      alt="coffemug"
    />
  );
};
export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

export const ProductsButtons = ({
  counter,
  increaseBy,
}: {
  counter: number;
  increaseBy: (arg: number) => void;
}) => {
  return (
    <div className={styles.buttonsContainer}>
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

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <>
      <div className={styles.productCard}>
        { children }
      </div>
    </>
  );
};

// ProductCard.Buttons = ProductsButtons;
// ProductCard.Img = ProductImage;
// ProductCard.Title = ProductTitle;
