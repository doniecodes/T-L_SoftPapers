import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import Home from "../pages/Home"
import Products from "../pages/Products"
import SingleProduct from "../pages/SingleProduct"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Checkouts, { loader as checkoutLoader } from "../pages/Checkouts"
import Admin, { loader as adminLoader } from "../pages/Admin"
import Dashboard from '../pages/Dashboard'
import Login, { loader as loginLoader } from '../pages/Login'
import Filestack from '../pages/Filestack'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<Home />} />
    
    <Route path="/" element={<MainLayout />}>
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<SingleProduct />} />

      <Route path="about" element={<About />} />

      <Route path="contact" element={<Contact />} />

      <Route path="checkouts" element={<Checkouts />}
      loader={checkoutLoader} />

      <Route path="login" element={<Login />}
      loader={loginLoader} />

      <Route path="admin" element={<Admin />}>
      <Route index element={<Dashboard />}
      loader={adminLoader}/>
      <Route path="filestack" element={<Filestack />}/>
      </Route>

    </Route>
    </>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App