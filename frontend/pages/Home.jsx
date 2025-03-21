import React, { useRef } from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaChevronLeft, FaChevronRight, FaMinus, FaPlus, FaUser } from "react-icons/fa"
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';

const Home = () => {

  const proofRef = useRef(null);
  const handleLeft = ()=> {

  }

  const handleRight = ()=> {

  }


  return (
    <>
   < HeaderHome />

    <div className="container2">
     <section className="home-section">
      <div className="hero">
      <div className="hero-content-div">
        <h1 className='heading-1'>Experience The Perfect Balance Of Strength And Softness</h1>
        <p class="text hero-text">
          At T&L-SoftPapers, we believe that comfort shouldn't compromise durability. Our tissues are designed to provide the gentle touch you desire while standing up to everyday challenges.
          </p>
        <div className="hero-btns">
        <Link className='hero-btn' to="/products">
        Order Now <span> &darr; </span>
        </Link>
        <Link className='hero-btn whatsapp-btn' to="/contact">
          Get a free quote
        </Link>
        </div>
      </div>
      </div>
     </section>
    </div>
    
    <div className="container">
      <section className="home-section-2">
      <div className="home-image-div">
        <img className='home-image-2' src="../images/papers_3.jpg" alt="" />
      </div>
      <div className="home-content-div home-content-div-2">
        <h1 className='heading-1-2'>Experience The Best In Tissue Quality</h1>
        <p class="text hero-text">
        At T&L-SoftPapers, we pride ourselves on delivering tissues that combine exceptional strength with unparalleled softness.
        </p>
        <Link className='hero-btn' to="/products">
        Order Now &rarr;
        </Link>
      </div>
      </section>
    </div>

    {/* <div className="container">
      <section className="features-section">
        <h2 className='heading-2 features-heading'>Discover the Key Features of Our Tissues</h2>
        <div className="features-wrapper">
          <div className="feature">
            <h3>Unmatched Durability for Everyday Use</h3>
            <p>Our tissues are crafted to withstand the toughest tasks.</p>
          </div>

          <div className="feature">
            <h3>Eco-Friendly Choices for a Greener Future</h3>
            <p>We use sustainable materials to protect our planet..</p>
          </div>

          <div className="feature">
            <h3>Experience the SoftPapers Difference Today</h3>
            <p>Join us in making a positive impact.</p>
          </div>
        </div>
      </section>
    </div> */}

    {/* <div className="container">
    <section className="social-proof-section">
      <h2 className="heading-2 heading-proof">Customer Testimonials</h2>
      <p className='section-text'>Our customers love our high-quality tissues!</p>
      <div className="proof-divs">
        <FaChevronLeft onClick={handleLeft} className="left"/>
        <div className='proofs active'
        ref={proofRef}>
            <div className="proof">
              <FaUser className='author-icon' />
              <p>"The softness is unmatched, I won't buy anywhere else!"</p>
              <span className="author">John Doe</span>
            </div>
            <div className="proof">
              <FaUser className='author-icon' />
              <p>"I can't imagine using anything else for my family!"</p>
              <span className="author">John Doe</span>
            </div>
        </div>
 */}
 
{/*         <div className='proofs'
        ref={proofRef}>
            <div className="proof">
              <FaUser className='author-icon' />
              <p>"T&L-SoftPapers has transformed our office supply needs!"</p>
              <span className="author">John Doe</span>
            </div>
            <div className="proof">
              <FaUser className='author-icon' />
              <p>""I recommend T&L-SoftPapers to all my friends!""</p>
              <span className="author">John Doe</span>
            </div>
        </div>
        <FaChevronRight onClick={handleRight} className="right" />
      </div>
    </section>
    </div> */}

    <div className="container">
      <section className="faqs-section">
        <h2 className="heading-2 faqs-heading">Frequently Asked Questions</h2>
        <p className='section-text'>Find answers to your questions about our products, shipping, and return policies.</p>
        <div className="faqs-wrapper">
          <details>
            <summary>What are your shipping options?<div className="summary-btns"> <span><FaPlus /></span> <span><FaMinus /></span> </div> </summary>
            <p className="answer">We offer standard and expedited shipping options. Standard shipping typically takes 5-7 business days, while expedited shipping can arrive in 2-3 business days. You can choose your preferred option at checkout.</p>
          </details>
          <details>
            <summary>What products do you offer? <div className="summary-btns"> <span><FaPlus /></span> <span><FaMinus /></span> </div> </summary>
            <p className="answer">We manufacture a variety of tissue products, including facial tissues, paper towels, and toilet paper. All our products are made from high-quality materials to ensure softness and durability. Explore our product range on the products section.</p>
          </details>
          <details>
            <summary>What is your return policy? <div className="summary-btns"> <span><FaPlus /></span> <span><FaMinus /></span> </div> </summary>
            <p className="answer">If you are not satisfied with your purchase, you can return it within 3 days for a full refund. Please ensure the product is unopened and in its original packaging. Contact us for assistance with returns.</p>
          </details>
          <details>
            <summary>How can I contact you? <div className="summary-btns"> <span><FaPlus /></span> <span><FaMinus /></span> </div> </summary>
            <p className="answer">You can reach us through the contact form on our website or by whatsapp. We strive to respond to all inquiries within 24 hours. Your satisfaction is our priority!</p>
          </details>
          <details>
            <summary>Do you offer discounts? <div className="summary-btns"> <span><FaPlus /></span> <span><FaMinus /></span> </div> </summary>
            <p className="answer">Yes, we offer discounts. Only bulk orders may qualify for additional savings.</p>
          </details>

          {/* <div className="more-questions-div">
          <h3>Still have questions?</h3>
          <p>We're here to help</p>
          <Link to="contact">Contact</Link>
        </div> */}
        </div>
      </section>
    </div>

    <Footer />
    </>
  )
}

export default Home