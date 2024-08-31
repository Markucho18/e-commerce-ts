export const calculateDiscount = (price: number, percent: number) => {
  const discount = price * percent / 100
  const discountPrice = price - discount
  return discountPrice.toFixed(2)
}