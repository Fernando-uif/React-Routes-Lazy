import {
  ProductImage,
  ProductCard,
  ProductsButtons,
  ProductTitle,
} from "../components";

import { Product } from "../interfaces/Product";
import "../styles/custom-style.css";

const product: Product = {
  id: "1",
  title: "Coffe mub- card",
  img: false,
};
export const ShoppingPage = () => {
  return (
    <>
      <div>
        ShoppingPage
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <ProductCard className="bg-color container" product={product}>
            <ProductImage className="imageContainer" />
            <ProductTitle title="hola" className="textColor" />
            <ProductsButtons className={"buttons"} />
          </ProductCard>

          <ProductCard product={product}>
            <ProductImage style={{ borderRadius: "10px" }} />
            <ProductTitle title="hola" />
            <ProductsButtons />
          </ProductCard>
        </div>
      </div>
    </>
  );
};
