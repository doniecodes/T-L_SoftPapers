import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import { CartContextProvider } from './CartContext'

export const UserContext = createContext();

const reducer = ( state, action )=> {
    switch(action.type) {
        case "LOGIN" :
            return {
                user: action.payload
            }
        case "LOGOUT": 
        return {
            user: null,
        }

        default: 
        return { ...state }
    }
}

export const  UserContextProvider = ({ children })=> {
    const [ state, dispatch ] = useReducer(reducer, { user: null});

    console.log(state)

        useEffect(()=> {
            const user = JSON.parse(localStorage.getItem("user"));
            if(user){
                dispatch({ type: "LOGIN", payload: user });
            }
        }, [])

  return (
    <>
    <UserContext.Provider value={ {...state, dispatch} }>
        { children }
    </UserContext.Provider>
    </>
  )
}