import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useUserContext } from '../context/useUserContext'

const AdminHeader = () => {
  const { user, dispatch } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = ()=> {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/")
  }

  return (
    <>
        <div className="container">
            <header className="admin-header">
                <NavLink to="." >Dashboard</NavLink>
                <NavLink onClick={handleLogout}>Logout</NavLink>
            </header>
        </div>
    </>
  )
}

export default AdminHeader