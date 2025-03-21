import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"

const Products = () => {
  const [ items, setItems ] = useState([]);
  const [ error, setError ] = useState([]);

  useEffect(()=> {
    const getItems = async ()=> {
      const res = await fetch("http://localhost:4000/api/papers")
      const data = await res.json();
      
      if(res.ok){
        setItems(data.papers);
      }
      if(!res.ok){
        setError(data.error);
      }
    }
    getItems();
  }, [])

  console.log(items)


  return (
    <div className="container">
      <section className="products-section">
      <h1 className="heading-1 products-heading">Our Products</h1>
      <h2 className="heading-3">
        Discover our diverse tissue offerings
      </h2>

      <div className="products-wrapper">
        { items.length !== 0 && items.map((item)=> (
          <Link to={item._id}>
          <div className="product">
            <div className="product-img-div">
              <img className='product-image'
              src={item.image}
              alt={item.name} />
              <span>R{item.price}</span>
            </div>
            <div className="product-details">
              <h3 className="product-name">
                { item.title }
              </h3>
              <p className="product-desc">
                { item.description }
              </p>
              <button><FaShoppingCart/> Add To Cart</button>
            </div>
          </div>
          </Link>
        ))
         }

      </div>
    </section>
    </div>
  )
}

export default Products