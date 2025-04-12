import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { StyledGlobal } from './stylesGlobal.ts'
createRoot(document.getElementById('root')!).render(


  <StrictMode>
    <StyledGlobal />
    <App />
  </StrictMode>,



)
