import { ReactElement } from "react";
export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: () => void;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (arg: number) => void;
  product: Product;
}
export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface useProductArgs {
  product: Product;
  onChange?: (arg: onChangeArgs) => void;
}
