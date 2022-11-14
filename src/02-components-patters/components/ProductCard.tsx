import styles from "../styles/styles.module.css";
import image from "../public/coffee-mug.png";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { Product } from "../interfaces/Product";

interface Props {
  product: Product;
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
  increaseBy: (arg:number) => void;
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

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <>
      <div className={styles.productCard}>
        <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductsButtons counter={counter} increaseBy={increaseBy} />
      </div>
    </>
  );
};
