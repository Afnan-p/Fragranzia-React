import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { Cartcontaxt } from '../context/Cartcontext';
import { Header } from '../components/Header';
import { GrClose } from "react-icons/gr";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import "./AddToCart.css"
import { Footer } from '../components/Footer';
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";





export const AddToCart = () => {
  const { cartItems, Removeitem, Countfunction, DecrementFunction,Buyfunction } = useContext(Cartcontaxt)
  // console.log(cartItems,"cartitems");
  const GrandToatal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (



    <div className='Cart  '>
      <Header />
      <div className="Cart-Content flex justify-between   ">
        <div className='Cart-Products-Slide '>
        <h2 style={{ fontSize: '35px' }}><b>Cart Products</b></h2>
          {cartItems.length === 0 ? (
            <p style={{ color: "red", fontSize: '20px', margin: '10px' }}> Your Fragranzia Cart Is empty <FaOpencart /></p>
          ) : (cartItems.map((product) => (
            <div key={product.id}>
              <div className='Product-Card m-3 border border-gray-400 rounded-lg shadow-md hover:shadow-lg w-full sm:w-[95%] md:w-[700px] lg:w-[700px] p-2 '>
                <div className='content flex  sm:flex-row gap-3 mt-3 '>
                  <div>
                    <div className="img">
                      <img className='product-image p-3 w-full sm:w-40 h-40 object-contain ' src={product.image} alt="" />
                    </div>
                    <div className='cart-item-Quantity flex justify-center items-center border border-black-300 w-20 p-1 gap-2 mx-10 mb-2'>
                      {product.quantity > 1 ? (<button onClick={() => DecrementFunction(product.id)}><CiSquareMinus size={25} /></button>)
                        : (<button onClick={() => Removeitem(product.id)} ><MdDeleteOutline size={25} /></button>)}
                      <p>{product.quantity}</p>
                      <button onClick={() => Countfunction(product.id)} ><CiSquarePlus size={25} /></button>

                    </div>

                  </div>

                  <div>
                    <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                    <p className='product-description'>{product.description.slice(0, 30)}...</p>
                    <p className="card-text ">{product.category}</p>
                    <h6>Rs {product.price  * product.quantity}/-</h6>
                    <div className='rating-stars flex   gap-1 ' >
                      {Array.from({ length: 5 }).map((v, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className='Cart-close-btn'>
                      <button onClick={() => Removeitem(product.id)} style={{ border: 'none', background: 'none' }}>
                        <GrClose />
                      </button>
                    </div>
                    <div className="Cart-Buttons flex   md:flex-row  justify-between my-3 gap-5 " >
                      <div className='Cart-Delete-btn text-center border border-gray-300 p-2 w-20'><button onClick={() => Removeitem(product.id)}>Delete</button></div>
                      <div className='Cart-Share-btn text-center border border-gray-300 p-2 w-20'><button>Share</button></div>
                      <div className='Cart-Buy-btn  text-center border border-gray-300 p-2 w-20'><button onClick={()=>Buyfunction(product.id)}> <Link to="/order">Buy</Link></button></div>


                    </div>
                  </div>
                </div>


              </div>

            </div>
          )))}
          

        </div>
          <div className="cart-checkout-all mt-16 ">
      {cartItems.length>0 &&( 
      <div className="cart-checkout border border-gray-400 rounded-lg shadow-md hover:shadow-lg w-100 px-8 py-4  mx-4  w-full  sm:w-[90%] md:w-[700px] lg:w-[400px] ">
        <h1 style={{ fontSize: '25px' }}><b>Check out</b></h1>
        <div className='flex  justify-between  border-b-2 border-gray-300'>
<p>Price({cartItems.length})</p>
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
    

      <div className="footer ">
      <Footer />

      </div>
    </div>
  )
}
