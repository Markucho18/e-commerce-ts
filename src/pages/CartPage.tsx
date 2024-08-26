import { usePagesContext } from "../contexts/PagesContext"
import productsData from "../products.json"
import { Product } from "../types"

const CartPage: React.FC = () => {

  const products: Product[] = [...productsData] as Product[]

  const { cartProducts } = usePagesContext()

  const getCartProducts = () => {
    return products.filter(product => cartProducts.includes(product.id))
  }

  return (
    <div className="flex flex-col w-full responsive-padding">
      {}
    </div>
  )
}

export default CartPage