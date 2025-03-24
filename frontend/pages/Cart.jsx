import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UseCartContext } from '../context/UseCartContext'

const Cart = (props) => {
    const { cart, dispatch, totalPrice } = UseCartContext();
    const [ qty, setQty ] = useState(1);
    const [ prices, setPrices ] = useState([]);

    const changeQty = (text)=> {
        if(text === "-" && qty !== 1){
            setQty( qty - 1 );
        }
        if(text === "+" && qty < 6){
            setQty( qty + 1 );
        }
    }

    const handleDelete = (id)=> {
        dispatch({ type: "DELETE_ITEM", payload: id })
    }

    useEffect(()=> {
        cart.map((item)=> {
            return setPrices((prev)=> {
                return [ ...prev, item.price]
            })
        })
        dispatch({ type: "SET_TOTAL_PRICE", payload: 0})
    }, [dispatch, totalPrice]);

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
                <div className="cart-item" key={item._id}>
                <img className='cart-item-image'
                 src="../images/picture(8).png"
                 alt="" />
                <div className="cart-item-content">
                    <h4 className="cart-item-name">
                        { item.title }
                        <button onClick={()=> handleDelete(item._id)}>
                        <FaTrash className='trash-icon'/>
                        </button>
                    </h4>
                    <p className="cart-item-desc">
                        {/* { item.description }  */}
                    </p>
                    <p className="cart-item-package">
                        <span>Packages:</span>
                        { item.package }
                    </p>
                    <div className="cart-item-qty-btns">
                        <button>
                            <span
                            onClick={(e)=> changeQty(e.target.innerText)} className="cart-qty-minus">-</span>
                            <span className="cart-qty">{item.qty}</span>
                            <span
                            onClick={(e)=> changeQty(e.target.innerText)} className="cart-qty-plus">+</span>
                        </button>
                        <div className="cart-item-price">
                            R{ item.price }
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
                <p><span>Subtotal:</span>{totalPrice}</p>
                <p><span>Total:</span>{totalPrice}</p>
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