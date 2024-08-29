import { Product } from "../types"

export const calculateQuantity = (products: Product[]) => {
  let total = 0
  products.map(product => {
    total = total + product.quantity
  })
  return total
}