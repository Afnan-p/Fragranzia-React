import React, { useContext } from 'react'
import { Cartcontaxt } from '../context/Cartcontext'
import { Header } from '../components/Header'
import { FaStar } from "react-icons/fa";
import './Ordering.css'

export const Ordering = () => {
      const { buyList,Buyfunction } = useContext(Cartcontaxt)
  const GrandToatal = buyList.reduce((total, item) => total + item.price * item.quantity, 0);

      
    
  return (
  
    <div className='Home-ordering'>
      <Header />
       <h2 style={{ fontSize: '35px' }}><b>Order Zone</b></h2>
              <div className='products p-4  flex justify-between'>
       <div className="orderall">
                {buyList.map((product) => (
                  <div key={product.id}>
                    <div className='Product-Card m-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg  w-full sm:w-[95%] md:w-[700px] lg:w-[700px]'style={{width:'400px'}}>
                      <div className='flex gap-3 mt-3 '>
                        <img className='product-image p-3' src={product.image} alt="" style={{ height: '150px', objectFit: 'contain' ,width: '150px'}} />
      
                        <div>
                          <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                          <p className='product-description'>{product.description.slice(0, 30)}...</p>
                          <p className="card-text ">{product.category}</p>
                          <h6>Rs {product.price  * product.quantity}/-</h6>
                          <p>Quantity:{product.quantity}</p>
                        </div>
                      </div>
                      <div className='rating-stars flex px-3  gap-1 ' >
                        {Array.from({ length: 5 }).map((v, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      
                    </div>
      
                  </div>
                ))}
                </div>


               <div className="cart-checkout-all mt-3">
      {buyList.length>0 &&( 
      <div className="cart-checkout border border-gray-400 rounded-lg shadow-md hover:shadow-lg w-100 px-8 py-4  mx-4  w-full  md:w-[400px] lg:w-[400px]   ">
        <h1 style={{ fontSize: '25px' }}><b>Check out</b></h1>
        <div className='flex  justify-between  border-b-2 border-gray-300'>
<p>Price({buyList.length})</p>
<p>Rs:{GrandToatal}/-</p>
        </div>
        <div> 
          <p className='mt-5'>Total:  <b>Rs {GrandToatal}/-</b> </p>
        </div>
         <div className="Buy-btn w-full  mt-2 p-3 text-center mt-5">

        <button>Proceed to Buy</button>
         </div>
      </div>
      )}
      </div>
              </div>

    </div>
  )
}
