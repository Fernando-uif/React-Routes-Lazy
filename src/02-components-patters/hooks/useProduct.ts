import { useState } from "react";
import { useProductArgs } from "../interfaces/Product";

export const useProduct = (onChange?: () => void) => {
  const [counter, setCounter] = useState(0);
  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
    onChange && onChange();
  };
  return {
    counter,
    increaseBy,
  };
};
