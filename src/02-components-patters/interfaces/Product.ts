import { ReactElement } from "react";
export interface Product {
  id: string;
  title: string;
  img?: boolean;
}
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (arg: number) => void;
  product: Product;
}
