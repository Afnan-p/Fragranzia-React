import React, { useState } from "react";
import {
  FaGoogle,
  FaFacebookF,
  FaUserCircle,
  FaLock,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save user info + token
      localStorage.setItem("token", JSON.stringify(res.token));

      alert("Login Successful ✅");
      navigate("/"); // home page lekku redirect
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Invalid credentials"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-10 bg-gray-50">
      
      {/* IMAGE SECTION (UNCHANGED) */}
      <div
        className="relative w-full max-w-md lg:max-w-lg h-[420px] sm:h-[480px] rounded-tl-[180px] rounded-br-[180px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Let's Get Started!
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Login to continue your Fragranzia journey.
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
        
        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
            <FaGoogle className="text-teal-400" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
            <FaFacebookF className="text-blue-600" />
            Facebook
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mb-6">
          Or login with email
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div className="relative">
            <FaUserCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <a href="#" className="text-teal-600 underline">
              Forgot Password?
            </a>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">
              {errorMessage}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-slate-800 text-white py-3 rounded-md hover:bg-slate-900 transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-teal-600 font-medium hover:underline"
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};