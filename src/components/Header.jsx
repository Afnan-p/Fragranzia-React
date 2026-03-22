import React from "react";
import { FaShoppingCart, FaBell, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-6 py-3 w-full gap-5">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-[#0d2a46]">
          Fragranzia
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 w-full ml-10">

          {/* Left Links */}
          <ul className="flex gap-8 text-gray-700 font-medium cursor-pointer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/order">Checkout</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/gifting">Gifting</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-6 ml-auto">

            <input
              type="text"
              placeholder="Search Here"
              className="w-64 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <div className="flex gap-3 items-center">

              {/* Cart */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                <Link to="/cart">
                  <FaShoppingCart />
                </Link>
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                <FaBell />
              </div>

              {/* Profile Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                <Link to={user ? "/profile" : "/login"}>
                  <FaUser />
                </Link>
              </div>

              {/* Dynamic Auth Buttons */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 bg-slate-800 text-white rounded-md hover:bg-slate-900"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-1 border rounded-md hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-1 bg-slate-800 text-white rounded-md hover:bg-slate-900"
                  >
                    Sign Up
                  </Link>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};