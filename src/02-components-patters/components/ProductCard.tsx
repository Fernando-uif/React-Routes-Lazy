
import { Props as ProductCardProps } from "../interfaces/Product";
import { useProduct } from "../hooks/useProduct";
import { ProductContext } from "../context/ProductContext";

import styles from "../styles/styles.module.css";

export const ProductCard = ({
  children,
  product,
  className,
  onChange,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product });

  return (
    <>
      <ProductContext.Provider
        value={{
          counter,
          increaseBy,
          product,
        }}
      >
        <div className={`${styles.productCard} ${className}`}>{children}</div>
      </ProductContext.Provider>
    </>
  );
};
