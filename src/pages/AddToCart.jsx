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




export const AddToCart = () => {
  const { cartItems, Removeitem, Countfunction, DecrementFunction } = useContext(Cartcontaxt)
  // console.log(cartItems,"cartitems");
  const GrandToatal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (



    <div className='Cart  '>
      <Header />
      <div className="Cart-Content">
        <h2 style={{ fontSize: '35px' }}><b>Cart Products</b></h2>
        <div className='Cart-Products-Slide '>
          {cartItems.length === 0 ? (
            <p style={{ color: "red", fontSize: '20px', margin: '10px' }}>Your Fragranzia Cart Is empty !!.</p>
          ) : (cartItems.map((product) => (
            <div key={product.id}>
              <div className='Product-Card m-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[45%]'>
                <div className='content flex  sm:flex-row gap-3 mt-3 '>
                  <div>
                    <div className="img">
                      <img className='product-image p-3 w-full sm:w-40 h-40 object-contain ' src={product.image} alt="" />
                    </div>
                    <div className='item-Quantity flex justify-center items-center border border-gray-300 w-20 p-1 gap-2 mx-10 mb-2'>
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
                    <h6>Rs {product.price * 20 * product.quantity}/-</h6>
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
                      <div className='Cart-Delete border border-gray-300 p-2 w-20'><button onClick={() => Removeitem(product.id)}>Delete</button></div>
                      <div className='Cart-Share border border-gray-300 p-2 w-20'><button>Share</button></div>
                      <div className='Cart-Buy border border-gray-300 p-2 w-20'><button>Buy</button></div>


                    </div>
                  </div>
                </div>


              </div>

            </div>
          )))}
          

        </div>
      </div>

      <div className="cart-checkout">
        <p>Price({cartItems.length})</p>
          <p>Total: Rs {GrandToatal}/-</p>

      </div>
      <Footer />
    </div>
  )
}
