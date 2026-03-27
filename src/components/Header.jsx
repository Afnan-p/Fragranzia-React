import React, { useState } from "react";
import {
  FaShoppingCart,
  FaBell,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("accessToken");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Cart", path: "/cart" },
    { name: "Checkout", path: "/order" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Gifting", path: "/gifting" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b shadow-sm fixed top-0 left-0 z-40">
        <div className="flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-bold text-[#0d2a46]">
            Fragranzia
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 w-full ml-10">

            {/* Links */}
            <ul className="flex gap-8 text-gray-700 font-medium">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="relative hover:text-black transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-5 ml-auto">

              {/* Search */}
              <input
                type="text"
                placeholder="Search..."
                className="hidden md:block w-56 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />

              {/* Icons */}
              <div className="flex gap-3 items-center">

                <Link to="/cart" className="icon-btn">
                  <FaShoppingCart />
                </Link>

                <div className="icon-btn">
                  <FaBell />
                </div>

                <Link to={user ? "/profile" : "/login"} className="icon-btn">
                  <FaUser />
                </Link>

                {/* Auth */}
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="btn-primary"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="btn-outline">
                      Login
                    </Link>
                    <Link to="/signup" className="btn-primary">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-50 flex flex-col overflow-y-auto transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 px-5 py-4 border-b">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg">
            <FaUser />
          </div>
          <div>
            <p className="font-medium">{user ? "Welcome Back" : "Guest User"}</p>
            <p className="text-sm text-gray-500">
              {user ? "Logged in" : "Please login"}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col px-5 py-4 gap-5 text-gray-700 font-medium">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:translate-x-2 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto px-5 pb-6">
          <div className="flex gap-4 mb-4">
            <Link to="/cart" className="icon-btn">
              <FaShoppingCart />
            </Link>
            <div className="icon-btn">
              <FaBell />
            </div>
            <Link to={user ? "/profile" : "/login"} className="icon-btn">
              <FaUser />
            </Link>
          </div>

          {user ? (
            <button onClick={handleLogout} className="btn-primary w-full">
              Logout
            </button>
          ) : (
            <div className="flex gap-3">
              <Link to="/login" className="btn-outline w-full text-center">
                Login
              </Link>
              <Link to="/signup" className="btn-primary w-full text-center">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};