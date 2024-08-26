import { Product, Sort } from "../types";

export const sortResults = (products: Product[], sort: Sort) => {
  const sizeOrder = ['XS', 'S', 'M', 'L', 'XL']
  const sortProducts = [...products]
  const sortOrder = {
    'aZ': () => products.sort((a, b) => a.name.localeCompare(b.name)),
    'Za': () =>products.sort((a, b) => b.name.localeCompare(a.name)),
    'priceMin': () => products.sort((a, b) => Math.floor(a.price) - Math.floor(b.price)),
    'priceMax': () =>products.sort((a, b) => Math.floor(b.price) - Math.floor(a.price)),
    'xsXL': () => products.sort((a, b) => sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size)),
    'xlXS': () => products.sort((a, b) => sizeOrder.indexOf(b.size) - sizeOrder.indexOf(a.size))
  }
  sortOrder[sort]()
  return sortProducts
}