import { Product } from "./models/Product";

export let products: Product[] = [
  { name: "cheese", price: 5.0 },
  { name: "ninja star", price: 50.0 },
  { name: "chicken butt", price: 12.0 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  let sum: number = 0;
  if (array.length > 0) {
    array.forEach((item) => {
      return (sum += item.price);
    });

    return sum / array.length;
  } else {
    return sum;
  }
};
