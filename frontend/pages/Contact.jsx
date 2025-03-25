import React, { useEffect, useRef } from 'react'
import { FaMap, FaMapMarker } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify"
import contactimage from "../images/papers3.jpg"
import contactimage2 from "../images/papers_1.webp"

const Contact = () => {

  const form = useRef(null);

  const handleSubmit = (e)=> {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          toast.success("Your message has been sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <>
    <ToastContainer />
    <section className="contact-section">
      <div className="contact-image-div">
        <img className='contact-image'
        src={contactimage} alt="" />
        <img className='contact-image'
        src={contactimage2} alt="" />
      </div>

      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit}
        ref={form}
        action=""
        className='contact-form'>
          <h2 className="form-heading">
            Get In Touch
            <span className="heading-style"></span>
          </h2>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required/>
            <div className="error error-name"></div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <div className="error error-email"></div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" id="phone" name="phone" required/>
            <div className="error error-phone"></div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" required></textarea>
            <div className="error error-message"></div>
          </div>

          <button className="submit-btn">
            Submit Form
          </button>

        </form>
      </div>
    </section>

    <div className="container">
    <section 
    className="business-details-section">
      <div className="business-details-wrapper">
        <div className='hours-table-wrapper
        '>
          <h2 className="hours-heading">
            Business Hours
          <span className="heading-style"></span>
      </h2>
      <p className="hours-text">
        Find out when we might be open or closed.
      </p>
        <table className="hours-table">
          <thead>
            <tr>
            <td>Days:</td>
            <td>Times:</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>09:00 AM - 17:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>09:00 AM - 17:00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>09:00 AM - 17:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>09:00 AM - 17:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>09:00 AM - 17:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>09:00 AM - 17:00 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
        </div>

        {/* Location */}
        <div className="location">
          <h2 className="location-heading">
            Our Location
            <span className="heading-style"></span>
          </h2>
          <p className="hours-text">
            Feel free to visit us at our location.
          </p>
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.938644538419!2d28.12291021029128!3d-25.640161777334267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfda12c808d95b%3A0x1005e86f9a9b9692!2s66%20Robyn%20St%2C%20Klerksoord%20AH%2C%20Akasia%2C%200200!5e0!3m2!1sen!2sza!4v1742642370297!5m2!1sen!2sza" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <a href="https://maps.app.goo.gl/ZPy3wm8JbaqPL9JR7" target='_blank'>
          <div className="map-details">
            <FaMap className='marker'/>
            <div>
            <p>66 Robyn Street</p>
            <p>Klerksoord, Akasia, 0182</p>
            </div>
          </div>
          </a>
        </div>

      </div>
    </section>
    </div>
    </>
  )
}

export default Contact