import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { UseCartContext } from '../context/UseCartContext';

const SingleProduct = () => {
    const { dispatch, cart } = UseCartContext();
    const { id } = useParams();
    
    const [ item, setItem ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ packs, setPacks ] = useState([]);
    const [ quantity, setQuantity ] = useState(1);
    const [ imgSrc, setImgSrc ] = useState("")

    useEffect(()=> {
        const getItem = async ()=> {
            setLoading(true)
            const res = await fetch(`http://localhost:4000/api/papers/${id}`);
            const data = await res.json();
            setItem(data.paper)

            if(res.ok){
                setItem(data.paper);
                setLoading(false)
                setImgSrc(data.image);
              }
              if(!res.ok){
                setError(data.error);
              }
        }
        getItem();
    }, [id])

    const handlePacks = (e)=> {
        e.target.classList.toggle("active");
        if(e.target.classList.contains("active")){
            setPacks((prev)=> {
                return [...prev, e.target.innerText]
            })
        }
    }

    const handleQuantity = (text)=> {
        if(text === "minus" && quantity !== 1){
            setQuantity( quantity - 1 );
            dispatch({ type: "DECREMENT"});
        }
        if(text === "plus" && quantity < 6){
            setQuantity( quantity + 1 );
            dispatch({ type: "INCREMENT" });
        }
    }

    const handleAddToCart = ()=> {
            const localItems = JSON.parse(localStorage.getItem("items"))
            const search = localItems !== null && localItems.find((p)=> p.id === id);
            if(search){
                window.alert("Item already in Cart.");
            }
            dispatch({ type: "ADD_TO_CART", payload: {item: item} });
            localStorage.setItem("items", JSON.stringify(cart));
    }

  return (
    <>
        <div className="container">
        <section className="single-product-section">

            <div className="single-product-wrapper">

                { loading && <div className='empty-list'>Loading Product Details...</div> }

              { item &&
                    <>
                <div className="single-product-image-div">
                    <div className="product-thumbnails">
                        <img
                        onClick={(e)=> setImgSrc(e.target.src)} src={item.image} alt=""
                        className='active'/>
                        {/* { item.images.map((img)=> (
                            <img
                            onClick={(e)=> setImgSrc(e.target.src)} src={img} alt="" />
                        )) } */}
                    </div>
                    <img src={imgSrc === "" ? imgSrc : item.image } alt="" className='single-product-image'/>
                </div>
                <div className="single-product-content">
                    <h3 className="single-product-name">
                        { item.title }
                    </h3>
                    <span className="single-product-price">
                        R{ item.price }
                    </span>
                    <p className="single-product-desc">
                        { item.description }
                    </p>
                    <div className="pack-sizes">
                        <p>select packgage:</p>
                        <div className="pack-sizes-btns">
                            { item.packages.map((pack)=> (
                                <button className=''
                                onClick={handlePacks}>{pack}</button>
                            )) }
                        </div>
                    </div>
                    <div className="to-cart-btns">
                        <div className="qty-controls">
                        <p>Select Quantity:</p>
                            <div>
                            <button onClick={()=> handleQuantity("minus")}
                            ><FaChevronLeft /></button>
                            <span className="qty">{quantity}</span>
                            <button onClick={()=> handleQuantity("plus")}
                            ><FaChevronRight /></button>
                            </div>
                        </div>
                        
                        <button onClick={handleAddToCart}
                        className='add-To-Cart-Btn'><FaShoppingCart/> Add To Cart</button>
                    </div>
                </div>
                    </>
                 }

            </div>
        </section>
        </div>
    </>
  )
}

export default SingleProduct