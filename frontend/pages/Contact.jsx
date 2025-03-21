import React, { useEffect, useRef } from 'react'
import { FaMap, FaMapMarker } from 'react-icons/fa';

const Contact = () => {

  const handleSubmit = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
  }

  const hoursRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(()=> {
    window.addEventListener('scroll', function(){
      if(window.pageYOffset > 50){
        btnRef.current.style.display = "none";
      } else {
        btnRef.current.style.display = "block";
      }
    })
  }, [])

  const handleSeeHours = ()=> {
    hoursRef.current.scrollIntoView({
      behaviour: "smooth",
    })
    btnRef.current.style.display = "none";
  }

  return (
    <>
    <section className="contact-section">
      <div className="contact-image-div">
        <img className='contact-image'
        src="../images/papers3.jpg" alt="" />
        <img className='contact-image'
        src="../images/papers_1.webp" alt="" />
      </div>

      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} action="" className='contact-form'>
          <h2 className="form-heading">
            Get In Touch
            <span class="heading-style"></span>
          </h2>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name"/>
            <div className="error error-name"></div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"/>
            <div className="error error-email"></div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" id="phone" name="phone"/>
            <div className="error error-phone"></div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message"></textarea>
            <div className="error error-message"></div>
          </div>

          <button className="submit-btn">
            Submit Form
          </button>

        </form>
      </div>
    </section>

    {/* <button
    ref={btnRef}
    onClick={handleSeeHours}
    className="view-hours-btn">
      See Business Hours
    </button> */}

    <div className="container">
    <section ref={hoursRef}
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
            <th>Days:</th>
            <th>Times:</th>
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

          </div>
          <div className="map-details">
            <FaMap className='marker'/>
            <div>
            <p>Plot 19 Doreen Avenue</p>
            <p>Akasia, 0182</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
    </>
  )
}

export default Contact