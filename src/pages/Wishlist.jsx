import React, { useContext } from 'react'
import { Cartcontaxt } from '../context/Cartcontext';
import { Wishlistcontaxt } from '../context/Wishlistcontext';
import { FaStar } from "react-icons/fa";
import { Header } from '../components/Header';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Maincontext } from '../context/Maincontext';



export const Wishlist = () => {
      const { wishlist } = useContext(Wishlistcontaxt);
        const {handleAddToCart} =useContext(Cartcontaxt);
        const {data,setData}=useContext(Maincontext);
        
      
    
  return (
    
          <div className='WishList mt-4  '>
              <Header />
              <div className="wishall p-6" >
            <h2 style={{ fontSize: '35px' }}><b>Wishlist</b></h2>
            {wishlist.length===0?(<p style={{ color: "red", fontSize: '20px', margin: '10px' }}> Your Fragranzia Cart Is empty  <FaHeart size={28} color="red" /> </p>):
            (wishlist.map((product) => (
                <div key={product.id}>
                  <div className='Product-Card m-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg w-full sm:w-[95%] md:w-[700px] lg:w-[700px] '>
                    <div className='Product-Details flex gap-3 mt-3 '>
                      <img className='product-image p-3' src={product.image} alt="" style={{ height: '150px', objectFit: 'contain', width: '150px' }} />
    
                      <div>
                        <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                        <p className='product-description'>{product.description.slice(0, 30)}...</p>
                        <p className="card-text ">{product.category}</p>
                        <h6>Rs {product.price}/-</h6>
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
              )))}
           
              </div>
            </div>
    
        
  )
}
