import { inventoryItem } from "./models/Inventory";

export let inventory: inventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export const calcInventoryValue = (array: inventoryItem[]): number => {
  let sum = 0;
  array.forEach((item) => {
    let itemValue = item.product.price * item.quantity;
    sum += itemValue;
  });

  return sum;
};
