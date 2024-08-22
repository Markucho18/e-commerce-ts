import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PagesContextProvider } from './contexts/PagesContext.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PagesContextProvider>
      <App />
    </PagesContextProvider>
  </StrictMode>,
)
