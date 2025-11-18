import React from "react";
import { FaShoppingCart, FaBell, FaUser } from "react-icons/fa";
import { Product } from "../pages/Product";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      {/* Main container */}
      <div className="flex items-center justify-between px-6 py-3 w-full gap-5">

        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-[#0d2a46]">
          Fragranzia
        </a>

        {/* Toggle Button (Mobile) */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => {
            const menu = document.getElementById("mobileMenu");
            menu.classList.toggle("hidden");
          }}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 w-full ml-10">

          {/* Left Links */}
          <ul className="flex gap-8 text-gray-700 font-medium cursor-pointer">
  <li className="hover:text-[#0d2a46] transition">
    <Link to="/">Home</Link>
  </li>

  <li className="hover:text-[#0d2a46] transition">
    <Link to="/products">Product</Link>
  </li>
  <li className="hover:text-[#0d2a46] transition">
    <Link to="/cart">Cart</Link>
  </li>

  <li className="hover:text-[#0d2a46] transition">
    <Link to="/gifting">Gifting</Link>
  </li>

  <li className="hover:text-[#0d2a46] transition">
    <Link to="/about">About</Link>
  </li>
</ul>

          {/* Right side */}
          <div className="flex items-center gap-6 ml-auto">

            {/* Search */}
            <input
              type="text"
              placeholder="Search Here"
              className="w-64 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            {/* Icons */}
            <div className="flex gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
               <Link to="/cart"><FaShoppingCart /></Link>

                
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                <FaBell />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                <FaUser />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobileMenu" className="lg:hidden hidden px-6 pb-4">
        <ul className="flex flex-col gap-4 text-gray-700 font-medium">
          <li><Link to ="/">Home</Link> </li>
          <li><Link to="/products">Products</Link></li>
           <li className="hover:text-[#0d2a46] transition">
    <Link to="/cart">Cart</Link>
  </li>
          <li>Gifting</li>
          <li>About</li>
        </ul>

        <div className="mt-4 flex items-center gap-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search Here"
            className="w-full px-4 py-2 border rounded-full focus:outline-none"
          />

          {/* Icons */}
          <div className="flex gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border">
               <Link to="/cart"><FaShoppingCart /></Link>
              
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border">
              <FaBell />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border">
              <FaUser />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};
