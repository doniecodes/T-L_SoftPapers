import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

const initialState = {
    cart: JSON.parse(localStorage.getItem("items")) || [],
    totalItems: 0,
    totalPrice: 0,
    quantity: 1,
}

const reducer = ( state, action )=> {

    switch(action.type){
        case "INITIAL_CART":
            return {
                ...state,
                cart: action.payload,
            }

        case "SET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: action.payload,
            }

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [ ...initialState.cart, action.payload ],
            }

        case "DELETE_ITEM":
        return {
            ...state,
            cart: [ ...state.cart.filter(item=> item._id !== action.payload) ],
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

   /*  useEffect(()=> {
        const items = JSON.parse(localStorage.getItem("items"));
        if(items){
            dispatch({ type: "INITIAL_CART", payload: items })
        }
    }, []) */

  return (
    <>
    <CartContext.Provider value={ {...state, dispatch} }>
        { children }
    </CartContext.Provider>
    </>
  )
}
