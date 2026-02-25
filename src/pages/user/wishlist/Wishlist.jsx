import React, { useContext } from 'react'
import { Cartcontaxt } from '../../../context/Cartcontext';
import { Wishlistcontaxt } from '../../../context/Wishlistcontext';
import { FaStar } from "react-icons/fa";
import { Header } from '../../../components/Header';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Maincontext } from '../../../context/Maincontext';



export const Wishlist = () => {
      const { wishlist } = useContext(Wishlistcontaxt);
        const {handleAddToCart} =useContext(Cartcontaxt);
        const {data,setData}=useContext(Maincontext);
        
      
    
  return (
    
          <div className='WishList mt-4  '>
              <Header />
              <div className="wishall p-6" >
            <h2 style={{ fontSize: '35px' }}><b>Wishlist</b></h2>
            {wishlist.length === 0 ? (
  <p style={{ color: "red", fontSize: '20px', margin: '10px' }}>
    Your Wishlist is Empty <FaHeart size={24} color="red" />
  </p>
) : (
  wishlist.map((product) => (
    <div key={product._id}>
      <div className='Product-Card m-3 border border-gray-200 rounded-xl shadow-md hover:shadow-lg w-full sm:w-[95%] md:w-[700px]'>

        <div className='Product-Details flex gap-3 mt-3 p-3'>

          <img
            className='product-image'
            src={`http://localhost:5000/uploads/${product.images?.[0]}`}
            alt={product.name}
            style={{ height: '150px', objectFit: 'cover', width: '150px' }}
          />

          <div>
            <h5 className="card-title font-semibold">
              {product.name?.slice(0, 20)}...
            </h5>

            <p className='product-description text-gray-500'>
              {product.description?.slice(0, 30)}...
            </p>

            <h6 className="font-bold">
              Rs {product.c || product.price}/-
            </h6>
          </div>

        </div>

        <div className='rating-stars flex px-3 gap-1'>
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <div className='p-3'>
          <button
            className="Home-AddCart-btn w-full mt-2"
            onClick={() => handleAddToCart(product._id)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  ))
)}
           
              </div>
            </div>
    
        
  )
}
