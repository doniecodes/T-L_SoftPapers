import React from 'react'

const Checkouts = () => {

  const handleSubmit = (e)=> {
    e.preventDefault();
  }

  return (
    <>
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
              className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" placeholder='Enter your full name'/>
                <div className="error error-name"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder='Enter your email'/>
              </div>

              <div className="form-group">
                <label htmlFor="number">Phone Number:</label>
                <input type="number" id="number" placeholder='Enter phone number'/>
                <div className="error error-phone"></div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea id="address" placeholder='Enter your address'></textarea>
              </div>

              <div className="radio-div">
              {/* Delivery request */}
              <div className="radio-group">
                <legend>Delivery request?:</legend>
              
                <label>
                <input type="radio"
                name="delivery-option"
                value="on delivery"/>
                  Yes
                </label>

                <label>
                <input type="radio"
                name="delivery-option"
                value="before delivery"/>
                  No
                  </label>
              </div>
              {/* Payment Option */}
              <div className="radio-group">
                <legend>Payment Option:</legend>
              
                <label>
                <input type="radio"
                name="payment-option"
                value="on delivery"/>
                  On delivery
                </label>

                <label>
                <input type="radio"
                name="payment-option"
                value="before delivery"/>
                  Call for bank details
                  </label>
              </div>
              </div>

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