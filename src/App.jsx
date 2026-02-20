import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/user/home/Home'
import { Product } from './pages/user/product/Product'
import { AddToCart } from './pages/user/cart/AddToCart'
// import "./styles/variables.css";
import "./style/global.css";
import { SignUp } from './pages/user/signUp/SignUp';
import { Login } from './pages/user/login/Login'
import { Wishlist } from './pages/user/wishlist/Wishlist';
import Singleproduct from './pages/user/singleproduct/Singleproduct';
import ProfilePage from './pages/user/Profile/ProfilePage';
import { Checkout } from './pages/user/checkout/Checkout ';


   {/* ===== ADMIN ROUTES ===== */}
/* ADMIN DASHBOARD */
import Dashboard from './pages/admin/dashboard/Dashboard';
import Orders from './pages/admin/dashboard/Orders';
import Products from './pages/admin/dashboard/Products';
import Customers from './pages/admin/dashboard/Customers';
import Inventory from './pages/admin/dashboard/Inventory';
import Reviews from './pages/admin/dashboard/Reviews';
import Coupons from './pages/admin/dashboard/Coupons';
import Payments from './pages/admin/dashboard/Payments';
import Settings from './pages/admin/dashboard/Settings';
import AddProduct from "./pages/admin/dashboard/AddProduct";
import Addcategory from './pages/admin/dashboard/AddCategory';




// import { Userprofile } from './pages/Userprofile'
function App() {

  return (
    <>

{/* <Router> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<AddToCart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/singleproduct/:id" element={<Singleproduct/>} />
        <Route path="/order" element={<Checkout/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/user" element={<Userprofile/>} /> */}
       
      
         {/* ===== ADMIN ROUTES ===== */}
         <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/admin/orders" element={<Orders/>} />
      <Route path="/admin/products" element={<Products/>} />
      <Route path="/admin/customers" element={<Customers/>} />
      <Route path="/admin/inventory" element={<Inventory/>} />
      <Route path="/admin/reviews" element={<Reviews/>} />
      <Route path="/admin/coupons" element={<Coupons/>} />
      <Route path="/admin/payments" element={<Payments/>} />
      <Route path="/admin/settings" element={<Settings/>} />
      <Route path="/admin/add-product" element={<AddProduct/>} />
      <Route path="/admin/add-category" element={<Addcategory/>} />



      <Route path="/profile" element={<ProfilePage/>} />

      </Routes>

{/* </Router> */}
    </>
  )
}

export default App
