import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import "./FeaturedCollection.css";
import { Cartcontaxt } from '../context/Cartcontext';


export const FeaturedCollection = ({setData,data}) => {
   
const {handleAddToCart} =useContext(Cartcontaxt);
// console.log(data,"dataaa");


  return (
    
      <div className='Home-Featured-Collections mt-4  '>
        <h2 style={{ fontSize: '35px' }}><b>Featured Collections</b></h2>
        <div className='Home-Products-Slide flex overflow-x-scroll  '>
          {data.map((product) => (
            <div key={product.id}>
              <div className='Product-Card m-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg 'style={{width:'400px'}}>
                <div className='flex gap-3 mt-3 '>
                  <img className='product-image p-3' src={product.image} alt="" style={{ height: '150px', objectFit: 'contain',width: '150px' }} />

                  <div>
                    <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                    <p className='product-description'>{product.description.slice(0, 30)}...</p>
                    <p className="card-text ">{product.category}</p>
                    <h6>Rs {product.price }/-</h6>
                  </div>
                </div>
                <div className='rating-stars flex px-3  gap-1 ' >
                  {Array.from({ length: 5 }).map((v, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className=' p-3 '>
                <button className="Home-AddCart-btn w-full  mt-2 " onClick={() => handleAddToCart(product.id)}>
                   Add to Cart
                </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
  )
}
