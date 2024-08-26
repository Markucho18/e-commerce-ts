import { createContext, useContext, useState } from "react"
import { Page } from "../types"

interface PagesContext {
  page: Page
  setPage: React.Dispatch<React.SetStateAction<Page>>
  productId: number
  openProductPage: (id: number) => void
  cartProducts: number[]
  addToCart: (id: number) => void
}

interface PagesContextProvider {
  children: React.ReactNode
}

const PagesContext = createContext<PagesContext | undefined>(undefined)

export const PagesContextProvider: React.FC<PagesContextProvider> = ({ children }) => {

  const [page, setPage] = useState<Page>('homePage')

  const [productId, setProductId] = useState(0)

  const [cartProducts, setCartProducts] = useState<number[]>([])

  const addToCart = (id: number) => {
    const newCartProducts = [...cartProducts, id]
    setCartProducts(newCartProducts)
  }

  const openProductPage = (id: number) => {
    setPage('productPage')
    setProductId(id)
  }

  return (
    <PagesContext.Provider value={{
      page,
      setPage,
      productId,
      openProductPage,
      cartProducts,
      addToCart
    }}>
      {children}
    </PagesContext.Provider>
  )
}

export const usePagesContext = () => {
  const context = useContext(PagesContext)
  if(!context){
    throw new Error("usePagesContext must be used inside PagesContextProvider")
  }
  return context
}