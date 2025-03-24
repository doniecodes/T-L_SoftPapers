import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify"
import { checkoutProtect } from '../utils/utils';
import { UseCartContext } from '../context/UseCartContext';

export const loader = async ({ request })=> {
  return await checkoutProtect(request);
}

const Checkouts = () => {
  const { cart } = UseCartContext();
  const [ items, setItems ] = useState();
  console.log(cart)

  const form = useRef(null);

  const handleSubmit = (e)=> {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID_CHECKOUT, import.meta.env.VITE_YOUR_TEMPLATE_ID_CHECKOUT, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY_CHECKOUT,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          toast.success("Order successfully sent!");
          localStorage.removeItem("items");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }

  return (
    <>
    <ToastContainer />
    <div className="container">
      <section className="checkout-section">

        <div className="checkout-img-div">
          <img src="../images/checkout2.jpg" alt="" className="checkout-img" />
        </div>

        <div className="checkout-content">
          <div className="checkout-header">
            <h2 className="checkout-heading">
              Checkout
              <span className="heading-style-2"></span>
            </h2>
            <p>Fill in your details below to confirm your checkout</p>
          </div>

          <div className="checkout-form-wrapper">
            <form onSubmit={handleSubmit}
            ref={form}
              className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name"
                name="name"
                required
                 placeholder='Enter your full name'/>
                <div className="error error-name"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"
                name="email"
                required
                 placeholder='Enter your email'/>
              </div>

              <div className="form-group">
                <label htmlFor="number">Phone Number:</label>
                <input type="number" id="number"
                name="phone"
                required
                placeholder='Enter phone number'/>
                <div className="error error-phone"></div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea id="address" name="address"
                required placeholder='Enter your address'></textarea>
              </div>

              <div className="radio-div">
              {/* Delivery request */}
              <div className="radio-group">
                <legend>Delivery request?:</legend>
                <label>
                <input type="radio"
                required
                name="delivery-option"
                value="YES"/>
                  Yes
                </label>

                <label>
                <input type="radio"
                required
                name="delivery-option"
                value="Yes"/>
                  No
                  </label>
              </div>
              {/* Payment Option */}
              <div className="radio-group">
                <legend>Payment Option:</legend>
                <label>
                <input type="radio"
                required
                name="payment-option"
                value="on delivery"/>
                  On delivery
                </label>

                <label>
                <input type="radio"
                required
                name="payment-option"
                value="Request call for bank details"/>
                  Request call for bank details
                  </label>
              </div>
              </div>

              <input type="text" name="link" value="http://localhost:3000/checkouts" hidden/>

              { cart.length !== 0 && cart.map((item)=> (
                <>
                <input
                value={item.title} 
                hidden name="item"/>
                <input
                value={item.sheets} 
                hidden name="sheets"/>
                <input
                value={item.package} 
                hidden name="package"/>
                <input
                value={item.qty} 
                hidden name="quantity"/>
                <input
                value={item.price} 
                hidden name="price"/>
                </>
              )) }

              <button className="submit-btn confirm-btn">
                confirm Checkout
                </button>
            </form>
          </div>
        </div>

      </section>
    </div>
    </>
  )
}

export default Checkouts