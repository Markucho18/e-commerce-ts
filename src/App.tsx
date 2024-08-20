//Components
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ResultsPage from "./pages/ResultsPage"
//Types
import { Page } from "./types"
import { useState } from "react"


const App: React.FC = () => {

  const [page, setPage] = useState<Page>('homePage')

  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden">
      <Header />
      <NavBar setPage={setPage}/>
      {page === 'homePage' ? <HomePage/> : <ResultsPage/>}
      <Footer />
    </div>
  )
}

export default App