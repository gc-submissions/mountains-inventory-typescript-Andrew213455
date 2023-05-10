import "./mountains";
import "./products";
import "./inventory";
import { calcInventoryValue, inventory } from "./inventory";
import { findNameOfTallestMountain, mountains } from "./mountains";
import { calcAverageProductPrice, products } from "./products";

console.log(calcInventoryValue(inventory));
console.log(findNameOfTallestMountain(mountains));
console.log(calcAverageProductPrice(products));
