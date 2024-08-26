import { Product } from "../types";

export const getRandomProducts = (products: Product[], amount: number) => {
  const randomProductsArray = []
  const usedIndices = new Set()
  while (randomProductsArray.length < amount) {
    const randomNumber = Math.floor(Math.random() * products.length);
    if (!usedIndices.has(randomNumber)) {
      randomProductsArray.push(products[randomNumber]);
      usedIndices.add(randomNumber);
    }
  }
  console.log(randomProductsArray)
  return randomProductsArray
};