import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaShoppingBasket, FaShoppingBag, FaBars, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Cart from "../pages/Cart"
import { UseCartContext } from '../context/UseCartContext';
import logoImage from "../images/logo.png"


const HeaderHome = () => {
  const { dispatch, cart, quantity } = UseCartContext();

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

    const itemsInCart = JSON.parse(localStorage.getItem("items"));
    const totalItems = itemsInCart && itemsInCart.length !== 0 ? itemsInCart.length : 0
  
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

    const headerInfo = useRef(null);
    useEffect(()=> {
      window.addEventListener("scroll", ()=> {
        if(window.pageYOffset > 20) {
          headerInfo.current.style.display = "none";
        } else {
          headerInfo.current.style.display = "flex";
        }
      })
    }, [])

  return (
    <>
    <header className="header-home">
      <div className="header-info" ref={headerInfo}>
      <div>
        <FaPhone />
      <a href="tel:079 103 5523">+2779 103 5523</a>
      </div>
      <div>
        <FaEnvelope />
      <a href="mailto:tandlsoftpapers@gmail.com">tandlsoftpapers@gmail.com</a>
      </div>
      <div>
      <a href="https://wa.link/25j4pe" target="blank"><FaWhatsapp /></a>
      </div>
    </div>

    <div className="header-flex">
      <Link to="/">
          <img src={logoImage} alt="" className="logo" />
      </Link>

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink style={linkStyle} to="/products" className="header-home-link">Products</NavLink>
          </li>
          <li>
            <button onClick={openCart}
            className='cart-icon'>
              <FaShoppingBag />
              <span>{totalItems}</span>
              </button>
          </li>
          <li>
            <NavLink style={linkStyle} to="/about" className="header-home-link">About</NavLink>
          </li>
          <li>
            <NavLink style={linkStyle} to="/contact" className="header-home-link">Contact</NavLink>
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
          </div>

    </header>

    <Cart cartRef={cartRef}
    closeCart={closeCart}/>
    </>
  )
}

export default HeaderHome