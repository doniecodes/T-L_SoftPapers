import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UseCartContext } from '../context/UseCartContext'

const Cart = (props) => {
    const { cart } = UseCartContext();
    console.log(cart);
    const [ qty, setQty ] = useState(1);

    const changeQty = (text)=> {
        if(text === "-" && qty !== 1){
            setQty( qty - 1 )
        }
        if(text === "+" && qty < 6){
            setQty( qty + 1 )
        }
    }

  return (
    <div className="cart-container" ref={props.cartRef}>
        <div className="cart-top">
        <div className="cart-header">
            <button className='close-cart'
            onClick={props.closeCart}>X</button>
            <span><FaShoppingCart /></span>
        </div>
        </div>

        <div className="cart-items">
        { cart.length === 0 &&
        <div className="empty-cart">
        <p>No items in the Cart. start adding now..</p>
        </div> }

            { cart.length !== 0 && cart.map((item)=> (
                <div className="cart-item">
                <img className='cart-item-image'
                 src="../images/picture(8).png"
                 alt="" />
                <div className="cart-item-content">
                    <h4 className="cart-item-name">
                        { item.title }
                        <button>
                        <FaTrash className='trash-icon'/>
                        </button>
                    </h4>
                    <p className="cart-item-desc">
                        { item.description } 
                    </p>
                    <p className="cart-item-package">
                        <span>Packages:</span>
                        { item.packages }
                    </p>
                    <div className="cart-item-qty-btns">
                        <button>
                            <span
                            onClick={(e)=> changeQty(e.target.innerText)} className="cart-qty-minus">-</span>
                            <span className="cart-qty">{qty}</span>
                            <span
                            onClick={(e)=> changeQty(e.target.innerText)} className="cart-qty-plus">+</span>
                        </button>
                        <div className="cart-item-price">
                            { item.price }
                        </div>
                    </div>
                </div>
            </div>
            ))}

        </div>

        {/* Cart Totals and Checkout */}

        { cart.length !== 0 &&
            <div className="cart-totals-wrapper">
            <div className="cart-totals-div">
                <p><span>Subtotal:</span> R690</p>
                <p><span>Total:</span> R690</p>
                <p><span>Delivery:</span> None</p>
            </div>
    
            <Link to="/checkouts"
            onClick={props.closeCart}
            className="checkout-btn">
                Checkout
            </Link>
            </div> }

    </div>
  )
}

export default Cart