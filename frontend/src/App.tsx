import { useEffect } from "react"
//Components
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ResultsPage from "./pages/ResultsPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
//Types
import { Page } from "./types"
import { usePagesContext } from "./contexts/PagesContext"
import { useFiltersContext } from "./contexts/FiltersContext"
import CheckoutInfoPage from "./pages/CheckoutInfoPage"

const App: React.FC = () => {

  const { clearFilter } = useFiltersContext()

  const { page, productId, searchText } = usePagesContext()

  const pageFilter: Record<Page, JSX.Element> = {
    'homePage': <HomePage />,
    'resultsPage': <ResultsPage searchText={searchText}/>,
    'productPage': <ProductPage id={productId}/>,
    'cartPage': <CartPage />,
    'checkoutInfoPage': <CheckoutInfoPage/>
  }

  useEffect(()=>{
    if(page !== 'resultsPage'){
      clearFilter()
    }    
  },[page])

  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden">
      <Header />
      <NavBar />
      {pageFilter[page]}
      <Footer />
    </div>
  )
}

export default App