import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from "./AdminHeader"
import { authRequired } from "../utils/utils"

export const loader = async ({ request })=> {
  return await authRequired(request);
}

const Admin = () => {
  return (
    <>
    <AdminHeader />
    <Outlet />
    </>
  )
}

export default Admin