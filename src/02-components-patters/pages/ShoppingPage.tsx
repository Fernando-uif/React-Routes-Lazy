import { useState } from "react";

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
  img: "02-components-patters/assets/coffee-mug.png",
};
const product2: Product = {
  id: "1",
  title: "Coffe mub - meme",
  img: "02-components-patters/assets/coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductIntCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductIntCart;
  }>({
    "1": { ...product, count: 2 },
    "2": { ...product2, count: 2 },
  });

  const onProductCountChange = () => {
    console.log("ON product change");
  };

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
          {products.map((product, i) => {
            return (
              <ProductCard
                key={i}
                className="bg-color container"
                product={product}
                onChange={() => onProductCountChange()}
              >
                <ProductImage className="imageContainer" />
                <ProductTitle title={product.title} className="textColor" />
                <ProductsButtons className={"buttons"} />
              </ProductCard>
            );
          })}
        </div>
        <div className="shopping-cart">
          <ProductCard className="bg-color container" product={product2}>
            <ProductImage className="imageContainer" />
            <ProductTitle title={product2.title} className="textColor" />
            <ProductsButtons className={"buttons"} />
          </ProductCard>
        </div>
      </div>
    </>
  );
};
