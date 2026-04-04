import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { Cartcontaxt } from '../../../context/Cartcontext';
import { Header } from '../../../components/Header';
import { GrClose } from "react-icons/gr";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import "./AddToCart.css"
import { Footer } from '../../../components/Footer';
import { FaOpencart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";





export const AddToCart = () => {
  const { cartItems, Removeitem, Countfunction, DecrementFunction,Buyfunction,setBuyList } = useContext(Cartcontaxt)
  // console.log(cartItems,"cartitems");
  console.log(Buyfunction,"buyyyyyyyy");
  
  const GrandToatal = cartItems.reduce((total, item) => total +(item.product?.price || 0)* item.quantity, 0);
 const navigate = useNavigate();
const handleBuyNow = (item) => {
  setBuyList([item]); // 👈 only one product
  navigate("/order");
};
  return (


<div className="Cart">
  <Header />

  <div className="Cart-Content flex justify-center gap-10">

    {/* LEFT SIDE - PRODUCTS */}
    <div className="Cart-Products-Slide flex-1">
      <h2 className="text-3xl font-bold mb-5">Cart Products</h2>

      {cartItems.length === 0 ? (
        <p className="text-red-500 text-lg">
          Your Fragranzia Cart Is empty <FaOpencart />
        </p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id}>

            {/* CARD */}
            <div className="Product-Card flex w-full max-w-[650px] gap-7 p-4 mb-5 border border-gray-200">
              {/* <div className="Product-Card mx-auto max-w-[650px] w-full p-4"> */}

              {/* IMAGE */}
              <img
                className="w-55 h-50 object-cover rounded-lg"
                src={`http://localhost:5000/uploads/${item.product?.images?.[0]}`}
                alt=""
              />

              {/* DETAILS */}
              <div className="flex flex-col justify-between w-full">

                {/* TOP */}
                <div>
                  <h5 className="card-title mb-1">
                    {item.product?.name}
                  </h5>

                  <p className="product-description mb-2">
                    {item.product?.description}
                  </p>

                  <h6 className="mb-3">
                    Rs {item.product?.price * item.quantity}/-
                  </h6>
                </div>

                {/* QUANTITY + REMOVE */}
                <div className="flex items-center justify-between">

                  {/* QUANTITY BOX */}
                  <div className="flex items-center border rounded-md overflow-hidden">

                    {item.quantity > 1 ? (
                      <button
                        onClick={() => DecrementFunction(item.product._id)}
                        className="px-3 py-1 bg-gray-200"
                      >
                        <CiSquareMinus />
                      </button>
                    ) : (
                      <button
                        onClick={() => Removeitem(item.product._id)}
                        className="px-3 py-1 bg-red-100"
                      >
                        <MdDeleteOutline />
                      </button>
                    )}

                    <span className="px-4 font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => Countfunction(item.product._id)}
                      className="px-3 py-1 bg-gray-200"
                    >
                      <CiSquarePlus />
                    </button>

                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => Removeitem(item.product._id)}
                    className="px-3 py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-100"
                  >
                    Remove
                  </button>

                </div>

                {/* BOTTOM */}
                <div className="flex items-center justify-between">

                  {/* STARS */}
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* SHARE */}
                  <button className="Cart-Share-btn">
                    Share
                  </button>
                  

                </div>
                
<button 
  className="Buy-btn w-full mt-5"
  onClick={() => handleBuyNow(item)}
>
  Buy Now
</button>
              </div>
              
            </div>

          </div>
          
        ))
      )}
      
    </div>

    {/* RIGHT SIDE - CHECKOUT */}
    {cartItems.length > 0 && (
      <div className="cart-checkout p-6 w-[350px] h-fit sticky top-24">
        {/* <div className="cart-checkout-all mt-16 h-fit sticky top-24"> */}

        <h2 className="text-xl font-bold mb-3">Check out</h2>

        <div className="flex justify-between border-b pb-2">
          <p>Price ({cartItems.length})</p>
          <p>Rs {GrandToatal}/-</p>
        </div>

        <p className="mt-4 font-semibold">
          Total: Rs {GrandToatal}/-
        </p>

        <Link to="/order">
          <button
            onClick={Buyfunction}
            className="Buy-btn w-full mt-5"
          >
            Proceed to Buy
          </button>
        </Link>

      </div>
    )}

  </div>

  <Footer />
</div>
   
  )
}
