import React from 'react'

import c1 from '../assets/bestseller.png'
import side from '../assets/bestseller.png'
import {
  FaHeart,
  FaShareNodes,
  FaCartShopping,
  FaBell,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
  FaTag,
} from "react-icons/fa6";


import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import s1 from "../assets/bestseller.png";
import s2 from "../assets/bestseller.png";
import s3 from "../assets/bestseller.png";
import s4 from "../assets/bestseller.png";
import s5 from "../assets/bestseller.png";

const imgs = [s1, s2, s3, s4, s5];


const Singleproduct = () => {
  return (
    <div>
        <Header/>
    <div className="w-full bg-white font-sans py-5">

      

      {/* BREADCRUMB */}
      <div className="flex gap-2 px-10 py-6">
        <span>Home</span>
        <span>&gt;</span>
        <span>Products</span>
        <span>&gt;</span>
        <span>Kyros Eau De Parfume 100ml for men</span>
      </div>

      {/* PRODUCT IMAGES SECTION */}
      <div className="flex gap-10 flex-col lg:flex-row px-10">

        {/* Small images */}
        <div className="flex flex-col gap-3">
          <img src={c1} className="w-28 h-28 border-4 border-indigo-900 object-cover" />
          <img src={c1} className="w-28 h-28 border-4 border-indigo-900 object-cover" />
          <img src={c1} className="w-28 h-28 border-4 border-indigo-900 object-cover" />
        </div>

        {/* Main image */}
        <div className="relative">
          <img src={side} className="w-[420px] h-[420px] object-cover" />
          
          {/* LIKE & SHARE */}
          <div className="absolute top-4 right-4 flex flex-col gap-3">
            <button className="bg-white p-2 rounded-full shadow"><FaHeart /></button>
            <button className="bg-white p-2 rounded-full shadow"><FaShareNodes /></button>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="max-w-xl">
          <h3 className="text-xl font-semibold">Autograph eau de parfum 100ml for men</h3>
          <p>Autograph</p>

          <span className="text-yellow-500 font-bold text-lg">4.5</span>
          <p className="text-red-600 mt-1">Hurry! Only few stocks left</p>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold">Rs 899</span>
            <span className="line-through text-gray-500">Rs 2000</span>
            <span className="text-green-600 font-bold">61% OFF</span>
          </div>

          {/* Quantity Button */}
          <div className="mt-4">
            <button className="flex items-center border px-4 py-1 rounded-md gap-4">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </button>
          </div>

          <p className="font-semibold mt-6">Delivery</p>
          <p className="text-gray-600 text-sm">
            Delivery by 28 Aug, Wednesday | Free if ordered before 9:24 PM
          </p>

          <p className="font-semibold mt-6">Description</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            This fragrance exudes a confident and enigmatic personality...
          </p>

          <p className="font-semibold mt-6">Available Offers</p>
          <div className="space-y-1">
            <p><FaTag className="inline text-green-500" /> Buy 2 get 1 free</p>
            <p><FaTag className="inline text-green-500" /> Free shipping above Rs 1399</p>
            <p><FaTag className="inline text-green-500" /> 15% off on first order</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a href="/payment">
              <button className="bg-blue-700 text-white px-6 py-2 rounded-md">Purchase Now</button>
            </a>
            <a href="/cart">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-md">Add to Cart</button>
            </a>
          </div>
        </div>
      </div>

      {/* SUGGESTED PRODUCTS */}
      <h2 className="text-xl font-bold px-10 mt-10">Suggested for you</h2>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 px-10 mt-5">
        {["s1","s2","s3","s4","s5"].map((img, index) => (
          <div key={index} className="bg-white shadow p-3">
           <img src={imgs[index]} className="w-full h-[250px] object-cover" />

            <p className="mt-3">Royal Eau De Parfume 100ml for men</p>
            <div className="mt-2">
              <span className="font-bold">Rs 650</span>
              <span className="line-through text-gray-500 ml-2 text-sm">Rs 2000</span>
            </div>
            <button className="bg-black text-white px-4 py-1 mt-3 rounded">Add to Cart</button>
          </div>
        ))}
      </div> 

      {/* FOOTER */}
     <Footer/>
    </div>
    </div>
  )
}

export default Singleproduct