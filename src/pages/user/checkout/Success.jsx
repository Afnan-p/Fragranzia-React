import React from "react";
import { Header } from "../../../components/Header";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import './Success.css'
export const Success = () => {   
const location = useLocation();
const order = location.state;
  return (
    <div>
      <Header />

      <div className="success-box flex flex-col items-center justify-center min-h-[70vh] text-center">

        {/* ICON */}
        <FaCheckCircle size={80} className="text-green-500 mb-4" />

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-2">
          Order Placed Successfully 🎉
        </h2>
        {/* ORDER ID*/}
        <p className="mt-2 text-gray-500">
  Order ID: {order?._id}
</p>


        {/* MESSAGE */}
        <p className="text-gray-600 mb-6">
          Thank you for shopping with Fragranzia 💖 <br />
          Your order has been confirmed.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">

          <Link to="/">
            <button className="px-6 py-3 bg-[#0d2a46] text-white rounded-md hover:scale-105 transition">
              Go to Home
            </button>
          </Link>

          <Link to="/product">
            <button className="px-6 py-3 border border-[#0d2a46] rounded-md hover:bg-gray-100">
              Continue Shopping
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};