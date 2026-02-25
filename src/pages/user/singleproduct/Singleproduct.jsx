import React, { useContext, useState } from 'react'
import { FaStar } from "react-icons/fa";

import c1 from '../../../assets/bestseller.png'
// import side from '../assets/bestseller.png'
import {
  FaHeart,
  FaShareNodes,
  FaCartShopping,
  FaBell,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
  FaTag,
} from "react-icons/fa6";
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Maincontext } from '../../../context/Maincontext';
// import { Product } from './Product';
import { Cartcontaxt } from '../../../context/Cartcontext';
import toast, { Toaster } from 'react-hot-toast';





const Singleproduct = () => {
  const {data,setData} =useContext(Maincontext);
  const [product,setProduct]=useState({});
  const {handleAddToCart} =useContext(Cartcontaxt);
  
  const {id}=useParams();
  console.log("id:",id);
    console.log("data:",data);

  function productdetails() {

     if (data.length > 0) {
    const result = data.find((item) => item._id === id);
    setProduct(result);
  }
  }
useEffect(() => {
  productdetails();
}, [data, id]);
  
  return (
    <div>
        <Header/>
    <div className="w-full bg-white font-sans py-5">

      

      {/* BREADCRUMB */}
      <div className="flex gap-2 px-10 py-6">
        <span>Home</span>
        <span>&gt;</span>
        <span>Products</span>
        <span>&gt;</span>
        <span>Kyros Eau De Parfume 100ml for men</span>
      </div>

      {/* PRODUCT IMAGES SECTION */}
      <div className="flex gap-10 flex-col lg:flex-row px-10">
        

        {/* Small images */}
        <div className="flex flex-col gap-3 ">
          <img src={`http://localhost:5000/uploads/${product.images?.[0]}`} className="w-28 h-28 border-4 border-indigo-900 object-cover" />
          <img src={`http://localhost:5000/uploads/${product.images?.[0]}`} className="w-28 h-28 border-4 border-indigo-900 object-cover" />
          <img src={`http://localhost:5000/uploads/${product.images?.[0]}`} className="w-28 h-28 border-4 border-indigo-900 object-cover" />
        </div>

        {/* Main image */}
       
            <div className="relative">
          <img src={`http://localhost:5000/uploads/${product.images?.[0]}`} className="w-[420px] h-[420px] object-contain" />

          
          {/* LIKE & SHARE */}
          <div className="absolute top-4 right-4 flex flex-col gap-3">
            <button className="bg-white p-2 rounded-full shadow"><FaHeart /></button>
            <button className="bg-white p-2 rounded-full shadow"><FaShareNodes /></button>
          </div>
        </div>
      

        {/* PRODUCT DETAILS */}
        <div className="max-w-xl"><h3><b>{product?.title}</b></h3>
          <p>Autograph</p>

          <span className="text-yellow-500 font-bold text-lg">4.5</span>
          <p className="text-red-600 mt-1">Hurry! Only few stocks left</p>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold">Rs:{product?.salePrice}</span>
            <span className="line-through text-gray-500">Rs:{product?.price}</span>
            <span className="text-green-600 font-bold">61% OFF</span>
          </div>

          {/* Quantity Button */}
          {/* <div className="mt-4">
            <button className="flex items-center border px-4 py-1 rounded-md gap-4">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </button>
          </div> */}

          <p className="font-semibold mt-6">Delivery</p>
          <p className="text-gray-600 text-sm">
            Delivery by 28 Aug, Wednesday | Free if ordered before 9:24 PM
          </p>

          <p className="font-semibold mt-6">Description</p>
          <p className="text-gray-600 text-sm leading-relaxed">
           {product?.description}
          </p>

          <p className="font-semibold mt-6">Available Offers</p>
          <div className="space-y-1">
            <p><FaTag className="inline text-green-500" /> Buy 2 get 1 free</p>
            <p><FaTag className="inline text-green-500" /> Free shipping above Rs 1399</p>
            <p><FaTag className="inline text-green-500" /> 15% off on first order</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a href="/payment">
              <button className="bg-blue-700 text-white px-6 py-2 rounded-md">Purchase Now</button>
            </a>
           
              <button className="bg-gray-800 text-white px-6 py-2 rounded-md" onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          
          </div>
        </div>
      </div>



      {/* SUGGESTED PRODUCTS */}
      <h2 className="text-xl font-bold px-10 mt-10">Suggested for you</h2>
 
     <div className='Home-Products-Slide flex overflow-x-scroll  '>
       
       {data.map((product) => (
            <div key={product._id}>
              <div className='Product-Card m-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg 'style={{width:'400px'}}>
                <div className='flex gap-3 mt-3 '>
                      <Link to={`/singleproduct/${product._id}`}> 
                 <img className='product-image p-3'src={`http://localhost:5000/uploads/${product.images?.[0]}`} alt="" style={{ height: '150px', objectFit: 'contain',width: '150px' }} />

                      </Link>

                  <div>
                    <h5 className="card-title">{product.name.slice(0, 20)}...</h5>
                    <p className='product-description'>{product.description.slice(0, 30)}...</p>
                    <p className="card-text ">{product.category}</p>
                    <h6>Rs {product.price}/-</h6>
                    <h6>Rs {product.salePrice}/-</h6>
                  </div>
                </div>
                <div className='rating-stars flex px-3  gap-1 ' >
                  {Array.from({ length: 5 }).map((v, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className=' p-3 '>
                <button className="Home-AddCart-btn w-full  mt-2 " onClick={() => handleAddToCart(product._id)}>
                   Add to Cart
                </button>
                </div>
              </div>

            </div>
          ))}
      </div> 
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {/* FOOTER */}
     <Footer/>
    </div>
    </div>
  )
}

export default Singleproduct