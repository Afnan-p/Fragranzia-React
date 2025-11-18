import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { Cartcontaxt } from '../context/Cartcontext';
import { Header } from '../components/Header';
import { GrClose } from "react-icons/gr";
import "./AddToCart.css"



export const AddToCart = () => {
  const {cartItems}=useContext(Cartcontaxt)
  // console.log(cartItems,"cartitems");
  
  return (

    
 
       <div className='Cart  '>
        <Header/>
        <div className="Cart-Content">
         <h2 style={{ fontSize: '35px' }}><b>Cart Products</b></h2>
         <div className='Cart-Products-Slide '>
           {cartItems.map((product) => (
             <div key={product.id}>
               <div className='Product-Card m-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[45%]'>
                 <div className='content flex  sm:flex-row gap-3 mt-3 '>
                   <img className='product-image p-3 w-full sm:w-40 h-40 object-contain ' src={product.image} alt=""  />
 
                   <div>
                     <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                     <p className='product-description'>{product.description.slice(0, 30)}...</p>
                     <p className="card-text ">{product.category}</p>
                     <h6>Rs {product.price * 20}/-</h6>
                 <div className='rating-stars flex   gap-1 ' >
                   {Array.from({ length: 5 }).map((v, i) => (
                     <FaStar key={i} />
                   ))}
                 </div>
                 <div className='Cart-close-btn'>
                        <button onClick={() => Removeitem(item.id)} style={{ border: 'none', background: 'none' }}>
                          <GrClose />
                        </button>
                      </div>
                 <div className="Cart-Buttons flex   md:flex-row  justify-between my-3 gap-5 " >
                  <div className='Cart-Delete border border-gray-300 p-2 w-20'><button>Delete</button></div>
                  <div className='Cart-Share border border-gray-300 p-2 w-20'><button>Share</button></div>
                  <div className='Cart-Buy border border-gray-300 p-2 w-20'><button>Buy</button></div>
                 
                
                 </div>
                   </div>
                 </div>
                 
             
               </div>
 
             </div>
           ))}
         </div>
 </div>
       </div>
  )
}
