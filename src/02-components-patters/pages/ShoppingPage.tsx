import {
  ProductImage,
  ProductCard,
  ProductsButtons,
  ProductTitle,
} from "../components";

import { Product } from "../interfaces/Product";
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
          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle title="hola" />
            <ProductsButtons />
          </ProductCard>
        </div>
      </div>
    </>
  );
};
