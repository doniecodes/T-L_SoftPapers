import React, { useRef } from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaShoppingBasket, FaShoppingBag, FaHamburger, FaBars } from "react-icons/fa";
import Cart from "../pages/Cart"
import { UseCartContext } from '../context/UseCartContext';


const Header = () => {
  const { dispatch, cart, totalItems, quantity } = UseCartContext();

   const cartRef = useRef(null);
  
    const openCart = ()=> {
        cartRef.current.classList.add("active")
    }

    const closeCart = ()=> {
      cartRef.current.classList.remove("active")
  }

  const linkStyle = ({isActive})=> {
    return {
      color: isActive ? "hsl(172, 83%, 32%)" : "hsl(0, 0%, 30%)"
    }
  }

  const mobileNav = useRef(null);
  const hamburger = useRef(null)
  const closeMenu = useRef(null)

  const handleMenu = (text)=> {
    if(text === "open"){
      mobileNav.current.classList.add("active")
      hamburger.current.style.display = "none";
      closeMenu.current.style.display = "block";
    }
    if(text === "close"){
      mobileNav.current.classList.remove("active")
      hamburger.current.style.display = "block";
      closeMenu.current.style.display = "none";
    }
  }

  return (
    <>
    
    <header className="header">
    <Link to="/">
    <img src="images/logo.png" alt="" className="logo" />
    </Link>

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink style={linkStyle} to="/products">Products</NavLink>
          </li>
          <li>
            <button onClick={openCart}
            className='cart-icon'>
              <FaShoppingBag />
              <span>{totalItems}</span>
              </button>
          </li>
          <li>
            <NavLink style={linkStyle} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink style={linkStyle} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile NAv */}
      <div className="mobile-nav-btns">
          <button
          onClick={()=> handleMenu("open")}
          ref={hamburger}
           className='hamburger'>
          <FaBars />
          </button>
          <button
          onClick={()=> handleMenu("close")}
          ref={closeMenu}
           className="close-mobile-menu">
            X
          </button>
        </div>
      <nav className="mobile-nav"
      ref={mobileNav}> 
        <ul className="mobile-nav-list">
          <li>
            <NavLink style={linkStyle} to="/products">Products</NavLink>
          </li>
          <li>
            <button onClick={openCart}
            className='cart-icon'>
              <FaShoppingBag />
              <span>{totalItems}</span>
              </button>
          </li>
          <li>
            <NavLink style={linkStyle} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink style={linkStyle} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      
    </header>

    <Cart cartRef={cartRef}
    closeCart={closeCart}/>
    </>
  )
}

export default Header