import { createContext, useContext, useState, useEffect } from "react"
import { Page } from "../types"

interface PagesContext {
  page: Page
  setPage: React.Dispatch<React.SetStateAction<Page>>
  productId: number
  openProductPage: (id: number) => void
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

interface PagesContextProvider {
  children: React.ReactNode
}

const PagesContext = createContext<PagesContext | undefined>(undefined)

export const PagesContextProvider: React.FC<PagesContextProvider> = ({ children }) => {

  const [page, setPage] = useState<Page>('homePage')

  const [productId, setProductId] = useState(0)

  const openProductPage = (id: number) => {
    setPage('productPage')
    setProductId(id)
  }

  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    console.log("searchText ha cambiado en PagesContext: ", searchText)
  },[searchText])

  useEffect(()=>{
    if(page !== 'resultsPage'){
      setSearchText("")
    }
  },[page])

  return (
    <PagesContext.Provider value={{
      page,
      setPage,
      productId,
      openProductPage,
      searchText,
      setSearchText
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