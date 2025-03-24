import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"

const Products = () => {
  const [ items, setItems ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState([]);

  useEffect(()=> {
    setLoading(true)
    const getItems = async ()=> {
      const res = await fetch("http://localhost:4000/api/papers")
      const data = await res.json(); 
      if(res.ok){
        setItems(data.papers);
        setLoading(false)
      }
      if(!res.ok){
        setError(data.error);
        setLoading(false)
      }
    }
    getItems();
  }, [])

  console.log(error)

  return (
    <div className="container">
      <section className="products-section">
      <h1 className="heading-1 products-heading">Our Products</h1>
      <h2 className="heading-3">
        Discover our diverse tissue offerings
      </h2>

      { loading && <div className='empty-list'> Loading Products... </div> }

      { !loading && items.length === 0 && <div className='empty-list'> No Products to see here. </div> }

      <div className="products-wrapper">
        { items.length !== 0 && items.map((item)=> (
          <Link to={item._id} key={item._id}>
          <div className="product">
            <div className="product-img-div">
              <img className='product-image'
              src={item.image}
              alt={item.name} />
              <span>R{item.prices[1]}</span>
            </div>
            <div className="product-details">
              <h3 className="product-name">
                { item.title }
              </h3>
              {/* <p className="product-desc">
                { item.description }
              </p> */}
              <p className="product-sheets">
                <span>Sheets: </span>{ item.sheets }
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