import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContextProvider } from '../context/CartContext.jsx'
import { UserContextProvider } from '../context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CartContextProvider>
  </StrictMode>,
)
