import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

    <footer className='footer'>
      <div className="footer-flex">
      <div className="footer-logo-div">
        <Link to="/">
        <img src="../images/logo.png" alt="logo" />
        </Link>
      </div>
      <div>
        <h4 className="footer-links-heading">
          USEFUL LINKS
        </h4>
      <ul className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="" target="_blank">Whatsapp</a>
      </ul>
      </div>
      </div>
      <div className="copyright-div">
      <p>© 2025 T&L-SoftPapers. All rights reserved.</p>
      <p>
        Website created by 
        <a href="https://wa.link/f7g1ay"
         target="_blank">
          Donald zarura | @doniecode
       </a>
       </p>
      </div>
    </footer>
    </>
  )
}

export default Footer