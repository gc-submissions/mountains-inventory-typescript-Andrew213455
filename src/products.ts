import { Product } from "./models/Product";

const products: Product[] = [
  { name: "cheese", price: 5.0 },
  { name: "ninja star", price: 50.0 },
  { name: "chicken butt", price: 12.0 },
];

const calcAverageProductPrice = (array: Product[]): number => {
  let sum = 0;
  array.forEach((item) => {
    return (sum += item.price);
  });

  return sum;
};

// console.log(calcAverageProductPrice(products));
