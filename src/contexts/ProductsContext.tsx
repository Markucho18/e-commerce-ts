import {useState, useContext, createContext} from "react"
import { Product } from "../types"
import productsData from "../products.json"

interface ProductsContext {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
}

interface ProductsContextProvider {
  children: React.ReactNode
}

const ProductsContext = createContext<ProductsContext | undefined>(undefined)

export const ProductsContextProvider: React.FC<ProductsContextProvider> = ({children}) => {

  const initialProducts: Product[] = productsData as Product[] 

  const [products, setProducts] = useState<Product[]>(initialProducts)

  const addToCart = (id: number) => {
    const index = products.findIndex(product => product.id === id)
    const newProducts = [...products]
    newProducts[index].quantity++
    setProducts(newProducts)
  }

  const removeFromCart = (id: number) => {
    const index = products.findIndex(product => product.id === id)
    const newProducts = [...products]
    newProducts[index].quantity--
    setProducts(newProducts)
  }



  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  const context = useContext(ProductsContext)
  if(!context){
    throw new Error("ProductsContext must be used inside ProductsContextProvider")
  }
  return context
}

