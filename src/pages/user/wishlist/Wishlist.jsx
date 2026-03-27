import React, { useContext } from 'react'
import { Cartcontaxt } from '../../../context/Cartcontext';
import { Wishlistcontaxt } from '../../../context/Wishlistcontext';
import { FaStar } from "react-icons/fa";
import { Header } from '../../../components/Header';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Maincontext } from '../../../context/Maincontext';
import { GrClose } from 'react-icons/gr';
import "./whishlist.css"



export const Wishlist = () => {
      const { wishlist,Removeitem,removingId  } = useContext(Wishlistcontaxt);
        const {handleAddToCart} =useContext(Cartcontaxt);
        const {data,setData}=useContext(Maincontext);
        
      
    
  return (
    
         <div className="WishList mt-4">
  <Header />

  <div className="wishall p-6 max-w-[900px] mx-auto">
    <h2 className="text-3xl font-bold mb-6">Wishlist</h2>

    {wishlist.length === 0 ? (
      <p className="text-red-500 text-lg">
        Your Wishlist is Empty <FaHeart size={24} />
      </p>
    ) : (
      wishlist.map((product) => (
        <div
          key={product._id}
          className={`${removingId === product._id ? "fade-out" : ""}`}
        >

          {/* CARD */}
          <div className="Product-Card flex gap-5 p-4 mb-5 relative">

            {/* IMAGE */}
            <img
              className="w-32 h-32 object-cover rounded-lg"
              src={`http://localhost:5000/uploads/${product.images?.[0]}`}
              alt={product.name}
            />

            {/* DETAILS */}
            <div className="flex flex-col justify-between w-full">

              {/* TOP */}
              <div>
                <h5 className="card-title mb-1">
                  {product.name?.slice(0, 25)}
                </h5>

                <p className="product-description mb-2">
                  {product.description?.slice(0, 50)}
                </p>

                <h6 className="font-bold text-[#0d2a46]">
                  Rs {product.price}/-
                </h6>
              </div>

              {/* BOTTOM */}
              <div className="flex items-center justify-between mt-3">

                {/* STARS */}
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">

                  {/* ADD TO CART */}
                  <button
                    onClick={() => handleAddToCart(product._id)}
                    className="px-4 py-2 bg-[#0d2a46] text-white rounded-md hover:scale-105 transition"
                  >
                    Add to Cart
                  </button>

                  {/* REMOVE */}
                  <button
                    onClick={() => Removeitem(product._id)}
                    className="px-3 py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-50"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>
      ))
    )}
  </div>
</div>
    
        
  )
}
