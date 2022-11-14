import { ProductCard, ProductImage, ProductsButtons, ProductTitle } from "../components/ProductCard";
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
              <ProductImage/>
              <ProductTitle title="hola"/>
              <ProductsButtons counter={0} increaseBy={function (arg: number): void {
              throw new Error("Function not implemented.");
            } }/>
          </ProductCard>
        </div>
      </div>
    </>
  );
};
