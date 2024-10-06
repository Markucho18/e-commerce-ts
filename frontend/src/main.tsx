import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PagesContextProvider } from './contexts/PagesContext.tsx'
import { ProductsContextProvider } from './contexts/ProductsContext.tsx'
import { FiltersContextProvider } from './contexts/FiltersContext.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PagesContextProvider>
    <ProductsContextProvider>
    <FiltersContextProvider>
      <App />
    </FiltersContextProvider>
    </ProductsContextProvider>
    </PagesContextProvider>
  </StrictMode>,
)
