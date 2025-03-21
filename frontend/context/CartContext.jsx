import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

const initialState = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    quantity: 1,
}

const reducer = ( state, action )=> {

    switch(action.type){
        case "INITIAL_CART":
            return {
                ...state,
                cart: action.payload
            }

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [ ...state.cart, action.payload ],
            }

        case "DELETE_ITEM":
        return {
            ...state,
            cart: [ ...state.cart.filter(item=> item.id !== action.payload.id) ]
        }

        case "INCREMENT":
        return {
            ...state,
            quantity: state.quantity + 1,
        }

        case "DECREMENT":
        return {
            ...state,
            quantity: state.quantity - 1,
        }

        default: 
        return { ...state }
        
    }
}

export const CartContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    console.log(initialState)

  return (
    <>
    <CartContext.Provider value={ {...state, dispatch} }>
        { children }
    </CartContext.Provider>
    </>
  )
}
