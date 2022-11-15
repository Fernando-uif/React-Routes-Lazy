import { createContext, ReactElement, useContext } from "react";

import { Product } from "../interfaces/Product";
import { useProduct } from "../hooks/useProduct";
import image from "../public/coffee-mug.png";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface ProductContextProps {
  counter: number;
  increaseBy: (arg: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);

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
export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  console.log(title, "Tenemos el title");
  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};

export const ProductsButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);
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
      <ProductContext.Provider
        value={{
          counter,
          increaseBy,
          product,
        }}
      >
        <div className={styles.productCard}>
          {children}
        </div>
      </ProductContext.Provider>
    </>
  );
};

// ProductCard.Buttons = ProductsButtons;
// ProductCard.Img = ProductImage;
// ProductCard.Title = ProductTitle;
