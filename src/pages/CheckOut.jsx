import React, { useContext, useState } from 'react'
import { Cartcontaxt } from '../context/Cartcontext'
import { Header } from '../components/Header'
import { FaStar } from "react-icons/fa";
import './CheckOut.css'
import toast, { Toaster } from 'react-hot-toast';
import { Payment } from '../components/Payment';
import { GrClose } from "react-icons/gr";



export const CheckOut= () => {
      const { buyList,Buyfunction ,setBuyList} = useContext(Cartcontaxt)
  const GrandTotal = buyList.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryCharge = 40;
    const gst = GrandTotal * 0.05;
     const finalAmount = GrandTotal + deliveryCharge + gst;
  const [addressShow,setAddressShow]=useState(false)
  // const [orderView,setOrderView]=useState(false)
  // const [dAddress,setDAddress]=useState({ name:"Afnan",
  //   phone:"8891003031",
  //   house: "Pathnapuram",
  //  city: "Areacode",
  //  pincode: "673639"})

  const [address,setAddress]=useState({
    name:"",
    phone:"",
    house: "",
   city: "",
   pincode: ""
  });
  function Validateaddress() {
 if (!address.name || !address.phone || !address.city ||
      !address.house || !address.pincode) {
   toast.error("Please Fill All Details!!")
   return false;   
  }
  if(address.phone.length!=10){
    toast.error("Phone number must be 10 digits")
   return false;   
    
  }
  if (address.pincode.length !== 6) {
    toast.error("Pincode must be 6 digits")
      return false;
    }
       return true;
}


  function handlePlaceOrder() {
 if (!Validateaddress())
  
   return;
    toast.success('Order SuccessFull!')
  console.log("Order Details:", {
      items: buyList,
      address,
      // payment,
      finalAmount,
    });

  //  setOrderView(true)
  
  }

function RemoveOrderitem(id) {
   const remove =buyList.filter((item)=>item.id!==id);
      setBuyList(remove);
}

      
    
  return (
  
    <div className='Home-ordering'>
      <Header />
       <h2 style={{ fontSize: '35px' }}><b>Checkout</b></h2>
              <div className='products p-4  flex justify-between '>
       <div className="orderall">
                {buyList.map((product) => (
                  <div key={product.id}>
                    <div className='Product-Card m-3 py-5  border border-gray-300 rounded-lg shadow-md hover:shadow-lg  w-full sm:w-[95%] md:w-[750px] lg:w-[700px]'>
                      <div className='product-details flex gap-3 mt-3 '>
                        <img className='product-image p-3' src={product.image} alt="" style={{ height: '150px', objectFit: 'contain' ,width: '150px'}} />
      
                        <div>
                          <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                          <p className='product-description'>{product.description.slice(0, 30)}...</p>
                          <p className="card-text ">{product.category}</p>
                          <h6>Rs {product.price  * product.quantity}/-</h6>
                          <p>Quantity:{product.quantity}</p>
                      <div className='rating-stars flex   gap-1 ' >
                        {Array.from({ length: 5 }).map((v, i) => (
                          <FaStar key={i} />
                        ))}
                        </div>
                         <div className='Cart-close-btn'>
                                              <button onClick={() => RemoveOrderitem(product.id)} style={{ border: 'none', background: 'none' }}>
                                                <GrClose />
                                              </button>
                                            </div>
                        </div>
                      </div>
                      
                    </div>
      
                  </div>
                ))}
                </div>


               <div className="cart-checkout-all mt-3">
      {buyList.length>0 &&( 
      <div className="cart-checkout border border-gray-400 rounded-lg shadow-md hover:shadow-lg w-100 px-8 py-4  mx-4  w-full  md:w-[400px] lg:w-[450px]   ">
        <h1 style={{ fontSize: '25px' }}><b>Check out</b></h1>
        <div className='flex  justify-between  pb-2  mb-2  border-b '>
<p className='mt-5'>Price({buyList.length})</p>
<p className='mt-5'>Total:  <b>₹ {GrandTotal}/-</b> </p>
        </div>
      
          <div className="border-b pb-2 mb-2 flex justify-between">
            <p>Delivery Charge</p>
            <p>₹ {deliveryCharge}</p>
          </div>
          
          <div className="border-b pb-2 mb-2 flex justify-between">
            <p>GST (5%)</p>
            <p>₹ {gst.toFixed(2)}</p>
          </div>
          
          <h3 className="text-lg font-bold flex justify-between">
            <span>Final Amount</span>
            <span>₹ {finalAmount.toFixed(2)}</span>
          </h3>
        
      </div>
      )}



      {buyList.length>0 &&(
  <div className="Payment-Section  border border-gray-400 rounded-lg shadow-md hover:shadow-lg p-4  w-full  md:w-[400px] md:h-[450px]  lg:w-[450px] lg:h-[450px] mx-3  mt-10">
<h3 className="text-xl font-bold mb-4">Payment Methods</h3>

<div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
  <div className="flex items-center gap-3">
    <img src="https://cdn-icons-png.flaticon.com/512/6124/6124997.png" className="w-6" />
    <span>Google Pay</span>
  </div>
  <input type="radio" name="payment" value="gpay" onChange={() => setPayment("Google Pay")} />
</div>

<div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
  <div className="flex items-center gap-3">
    <img src="https://cdn-icons-png.flaticon.com/512/891/891407.png" className="w-6" />
    <span>Cash on Delivery (COD)</span>
  </div>
  <input type="radio" name="payment" value="cod" onChange={() => setPayment("COD")} />
</div>

<div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
  <div className="flex items-center gap-3">
    <img src="https://cdn-icons-png.flaticon.com/512/825/825454.png" className="w-6" />
    <span>Paytm / PhonePe / Amazon Pay</span>
  </div>
  <input type="radio" name="payment" value="upi" onChange={() => setPayment("UPI")} />
</div>

<div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
  <div className="flex items-center gap-3">
    <img src="https://cdn-icons-png.flaticon.com/512/126/126122.png" className="w-6" />
    <span>Credit / Debit Card</span>
  </div>
  <input type="radio" name="payment" value="card" onChange={() => setPayment("Card")} />
</div>

<div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
  <div className="flex items-center gap-3">
    <img src="https://cdn-icons-png.flaticon.com/512/482/482947.png" className="w-6" />
    <span>Net Banking</span>
  </div>
  <input type="radio" name="payment" value="netbanking" onChange={() => setPayment("Net Banking")} />
</div>
 <div className="Buy-btn w-full  mt-2 p-3 text-center mt-5">

        <button>Proceed to Buy</button>
         </div>

 </div>
)}
      </div>
              </div>

<div className="Address_payment flex justify-between p-4">
              <div className="addressbox">
                <h2 className='text-lg font-bold 'style={{ fontSize: '25px' }}>Personal Details</h2>


                 <div className="order-details mt-5 p-4 border rounded bg-green-100 w-full sm:w-[95%] md:w-[700px] lg:w-[750px]">
    <h3 className="font-bold text-lg mb-2">Your Order is Confirmed!</h3>
    <p><b>Name:</b> {address.name}</p>
    <p><b>Phone:</b> {address.phone}</p>
    <p><b>Address:</b> {address.house}, {address.city}</p>
    <p><b>Pincode:</b> {address.pincode}</p>
    {/* <p><b>Payment Mode:</b> {payment}</p> */}
  </div>

                <div className="Address-btn p-1 mt-4">
                <button  onClick={()=>setAddressShow(!addressShow)} >Add New Address</button>
                </div>
                {addressShow && (
                   <div className="DeliveryAddress  p-4">
                  <h2 className='text-lg font-bold'>DeliveryAddress</h2>
                  <div className='inputs flex gap-3 flex-col border border-gray-400 rounded-lg shadow-md hover:shadow-lg p-4' >
                      <input  type="text" placeholder="Full Name"
                       className="w-full p-2 mb-2 border rounded"
                       onChange={(e)=>setAddress({...address,name:e.target.value})} />
                  
                          <input placeholder="Mobile Number" pattern="[0-9]{10}"
                           className="w-full p-2 mb-2 border rounded"
                            onChange={(e)=>setAddress({...address, phone:e.target.value})}
                          />

                          <input placeholder="House/Street"
                           className="w-full p-2 mb-2 border rounded"
                            onChange={(e)=>setAddress({...address, house:e.target.value})}
                          />

                          <input placeholder="City"
                           className="w-full p-2 mb-2 border rounded"
                            onChange={(e)=>setAddress({...address, city:e.target.value})}
                          />

                          <input placeholder="Pincode"
                           className="w-full p-2 mb-2 border rounded"
                            onChange={(e)=>setAddress({...address, pincode:e.target.value})}
                          />

                  </div>
                  <div className="order-btn mt-4 p-2">

                  <button onClick={handlePlaceOrder}> Order</button>
                  </div>
                </div>

                )}
               
              





</div>



              </div>
              {/* <Payment/> */}
              
     <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </div>
    
  )
}
