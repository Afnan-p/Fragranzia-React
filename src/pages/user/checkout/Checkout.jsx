
import React, { useContext, useEffect, useState } from "react";
import { Cartcontaxt } from "../../../context/Cartcontext";
import { Header } from "../../../components/Header";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const  API="http://localhost:5000/api/order"
export const Checkout = () => {
  const navigate = useNavigate();
  const { buyList , setBuyList} = useContext(Cartcontaxt);
  const [addresses, setAddresses] = useState([]);
const [selectedAddress, setSelectedAddress] = useState("");
const [paymentMethod, setPaymentMethod] = useState("COD");

const total = buyList.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const token = localStorage.getItem("accessToken");

const config = {
  headers: {
    Authorization: token,
  },
};

  const placeOrderHandler = async () => {
  try {
    const res = await axios.post(
  API,
   { items: buyList,
    addressId: selectedAddress,
   paymentMethod: paymentMethod,
},
  config
);
navigate ("/success",{ state: res.data }); 
 toast.success("Order placed successfully 🎉");
setBuyList([]);
  } catch (error) {
    // console.log(error.response?.data);
    toast.error("Order failed");
  }
};

const fetchAddresses = async () => {
  try{
    const res= await axios.get(API, config);
    console.log("checkout data",res.data);
    
    setAddresses(res.data)
     // default select first address
    if (res.data.length > 0) {
      setSelectedAddress(res.data[0]._id);
    }

  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  fetchAddresses();
}, []);


 return (
  <div>
    <Header />

    {buyList.length === 0 ? (
      
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h2 className="text-2xl font-bold mb-3">
          No items to checkout 😕
        </h2>

        <p className="text-gray-500 mb-5">
          Please add items to cart before placing order
        </p>

        <Link to="/product">
          <button className="px-6 py-3 bg-[#0d2a46] text-white rounded-md">
            Shop Now
          </button>
        </Link>
      </div>
    ) : (
     
      <>
        <div className="max-w-[1100px] mx-auto p-6 flex gap-10">

          {/* LEFT .......*/}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            {buyList.map((item) => (
              <div key={item._id} className="flex gap-4 mb-4 p-4 bg-white rounded-lg shadow">

                <img
                  src={`http://localhost:5000/uploads/${item.product.images[0]}`}
                  className="w-24 h-24 object-cover rounded"
                  alt=""
                />

                <div>
                  <h4 className="font-semibold">{item.product.name}</h4>
                  <p>Qty: {item.quantity}</p>
                  <p className="font-bold">
                    Rs {item.product.price * item.quantity}/-
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT....... */}
          <div className="w-[350px] bg-white p-6 rounded-lg shadow h-fit">
            <h3 className="text-xl font-bold mb-4">Price Details</h3>

            <div className="flex justify-between mb-2">
              <p>Items</p>
              <p>{buyList.length}</p>
            </div>

            <div className="flex justify-between mb-2">
              <p>Total</p>
              <p>Rs {total}/-</p>
            </div>

            <hr className="my-3" />

            <button
              onClick={placeOrderHandler}
              className="w-full bg-[#0d2a46] text-white py-3 rounded-md"
            >
              Place Order
            </button>
          </div>
        </div>

        {/* ADDRESS...... */}
        <div className="mb-4 px-6">
          <h3 className="font-bold">Delivery Address</h3>
<select
  className="w-full border p-2 rounded mb-3"
  value={selectedAddress}
  onChange={(e) => setSelectedAddress(e.target.value)}
>
  {addresses.map((addr) => (
    <option key={addr._id} value={addr._id}>
      {addr.fullName}, {addr.city}, {addr.state}
    </option>
  ))}
</select>        

        <select 
  className="w-full border p-2 rounded mb-3"
  value={paymentMethod}
  onChange={(e) => setPaymentMethod(e.target.value)}
>
  <option value="COD">Cash on Delivery</option>
  <option value="ONLINE">UPI / Card</option>
</select>
</div>
      </>
    )}
  </div>
);
};