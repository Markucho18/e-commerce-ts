import { Product } from "../types";


export const calculateTotalDiscount = (products: Product[], totalPrice: number) => {
  console.log("precio total: ", totalPrice)
  const discountsDifference = products.reduce((accumulator, product)=>{
    const discount = product.price * product.discount / 100
    return accumulator + discount
  }, 0) 
  const totalDiscount = (discountsDifference / totalPrice) * 100
  console.log(totalDiscount)
  return Math.floor(totalDiscount)
}