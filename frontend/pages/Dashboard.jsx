import React, { useRef, useState } from 'react'
import { FaFileImage } from 'react-icons/fa';
import { FormCustomHooks } from '../hooks/FormCustomHooks';

const Dashboard = () => {
    const [ imgSrc, setImgSrc ] = useState(null);
    const [ imagesSrc, setImagesSrc ] = useState([]);
    const { create, error } = FormCustomHooks();

    const handleInputImage = async (e)=> {
        const file = e.target.files[0]
        const base64 = await convertToBase64(file);
        setImgSrc(base64);
    }

    const imgRef = useRef(null);
    const imagesRef = useRef(null)

    const handleMultipleImages = async (e)=> {
        const files = e.target.files;
        Object.values(files).map( async (file)=> {
          const base64 = await convertToBase64(file);
            setImagesSrc((prev)=> {
                return [ ...prev, base64 ]
            });
        })
    }

    console.log(imagesSrc)

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title");
        const price = formData.get("price");
        const description = formData.get("description");
        const image = formData.get("image");
           
        await create({
          title, price, description, image:imgSrc
        })
    }

  return (
    <>
    <div className="container">
      <section className="admin-section">

      <form
      onSubmit={handleSubmit}
      className="add-products-form">
        <h2 className="add-products-form-heading">Add Product
        <span className="heading-style"></span>
        </h2>

        <div className="admin-form-group">
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name"
          name="title" required/>
        </div>

        <div className="admin-form-group">
          <label htmlFor="price">Product Prices:</label>
          <input type="text" id="price"
          name="price" required/>
        </div>

        <div className="admin-form-group">
          <label htmlFor="description">Product Description:</label>
          <input type="text" id="description"
          name="description" required/>
        </div>

        <div className="admin-form-group">
          <label htmlFor="image">
            Product Image:
          <input ref={imgRef}
          type="file"
          formEncType='multipart/form-data'
          accept="image/png, image/jpeg" id="image"
          name="image"
          onChange={handleInputImage}
          hidden/>
          <div className="img-view">
            { imgSrc && <img src={imgSrc && imgSrc} /> }
            { !imgSrc &&
                <>
                <FaFileImage className='img-view-img-icon'/>
                <p>Click or drag and drop <br/>
                to add an image.</p>
                </>
            }
          </div>
          </label>
        </div>

        {/* <div className="admin-form-group">
          <label htmlFor="other-images">
            Other Images:
          <input input ref={imagesRef}
          type="file"
          formEncType='multipart/form-data'
          multiple
          accept="image/png, image/jpeg"
          id="other-images"
          name="other-images"
          onChange={handleMultipleImages}
          hidden/>
          <div className="img-view">
            { imagesSrc.length !== 0 && imagesSrc.map((img)=> (
                <img src={img} />
            )) }
            { imagesSrc.length === 0 &&
                <>
                <FaFileImage className='img-view-img-icon'/>
                <p>Click or drag and drop <br/>
                to add images</p>
                </>
            }
          </div>
          </label>
        </div> */}

        <button className='admin-submit-btn'>Add Product</button>
      </form>
      </section>
    </div>
    </>
  )
}

export default Dashboard

const convertToBase64 = (file)=> {
  return new Promise((resolve, reject)=> {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=> {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error)=> {
      reject(error);
    }
  })
}
