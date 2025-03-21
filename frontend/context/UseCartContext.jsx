import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

export const UseCartContext = () => {
  
  const context = useContext(CartContext);

  return context
}