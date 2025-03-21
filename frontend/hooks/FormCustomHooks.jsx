import React, { useState } from 'react'
import { useUserContext } from '../context/useUserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const FormCustomHooks = () => {

    const { user, dispatch } = useUserContext();
    const [ error, setError ] = useState();
    const navigate = useNavigate();
    const token = user && user.token;

    // Login
    const login = async (email, password)=> {
        const res = await fetch("http://localhost:4000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email, password)
        })

        const data = await res.json();

        if(!res.ok){
            setError(data.errors);
        }
        if(res.ok){
            setError(null);
            localStorage.setItem("user", JSON.stringify(data));
            dispatch({ type: "LOGIN", payload: data });
            toast.success("Success, Logging In")
            navigate("/admin");
        }
    }
    // Logout
    const logout = ()=> {
        dispatch({ type: "LOGOUT" });
    }

    // Create Document
    const create = async (doc)=> {
        const res = await fetch("http://localhost:4000/api/papers/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
             },
            body: JSON.stringify(doc)
          })

        const data = await res.json();
        console.log("Document added", data);
        
        if(res.ok){
            toast.success("Success, Document Created")
        }
    }


  return { login, logout, create, error }
}
