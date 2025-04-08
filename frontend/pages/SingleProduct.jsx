import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { UseCartContext } from '../context/UseCartContext';
import { toast, ToastContainer } from "react-toastify"

const SingleProduct = () => {
    const { dispatch, cart } = UseCartContext();
    const { id } = useParams();
    
    const [ item, setItem ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ packs, setPacks ] = useState(null);
    const [ packPrice, setPackPrice ] = useState(null);
    const [ quantity, setQuantity ] = useState(1);
    const [ imgSrc, setImgSrc ] = useState("")
    const [ localItems, setLocalItems ] = useState(JSON.parse(localStorage.getItem("items")) || []);

    useEffect(()=> {
        const getItem = async ()=> {
            setLoading(true)
            const res = await fetch(`https://tandlsoftpapers-backend.onrender.com/api/papers/${id}`);
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
    }, [id, localItems])

    const handlePacks = (e)=> {
        e.target.classList.toggle("active");
        if(e.target.classList.contains("active")){
            setPacks((prev)=> {
                return [e.target.innerText];
            })
        }

        if(e.target.innerText === "10"){
            setPackPrice(item.prices[0])
        }
        if(e.target.innerText === "18"){
            setPackPrice(item.prices[1])
        }
        if(e.target.innerText === "24"){
            setPackPrice(item.prices[2])
        }
        if(e.target.innerText === "48"){
            setPackPrice(item.prices[3])
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
        const search = cart.length !== 0 && cart.find((p)=> p._id === item._id);

        if(packs === null){
            toast.error("select a package first");
            return
        }

        if(search){
           /*  window.alert("Item already in Cart."); */
            toast.error("Item already in cart")
            return;
        }
        
        dispatch({ type: "ADD_TO_CART", payload: { ...item, package: packs, price:packPrice, qty: quantity } });
        setLocalItems((prev)=> {
            return [ ...prev, { ...item, package: packs, price:packPrice, qty: quantity } ]
        })
        toast.success("Product added to cart");
    }
    localStorage.setItem("items", JSON.stringify(cart));


  return (
    <>
        <ToastContainer />
        <div className="container">
        <section className="single-product-section">

        { loading && <div className='empty-list'>Loading Product Details...</div> }

            <div className="single-product-wrapper">
              { item &&
                    <>
                <div className="single-product-image-div">
                    {/* <div className="product-thumbnails">
                        <img
                        onClick={(e)=> setImgSrc(e.target.src)} src={item.image} alt=""
                        className='active'/>
                    </div> */}
                    <img src={imgSrc === "" ? imgSrc : item.image } alt="" className='single-product-image'/>
                </div>
                <div className="single-product-content">
                    <h3 className="single-product-name">
                        { item.title }
                    </h3>
                    <span className="single-product-price">
                        R{ packPrice === null ? item.prices[0] : packPrice }
                    </span>
                    <p className="single-product-desc">
                    Premium quality tissues designed for comfort, hygiene, and everyday use.
                        {/* { item.description } */}
                    </p>
                    <div className="pack-sizes">
                        <p>select packgage: <i><small>to compare prices</small></i></p>
                        <div className="pack-sizes-btns">
                            { item.packages.map((pack)=> (
                                <button key={pack}
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