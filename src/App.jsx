import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddToCart } from './pages/AddToCart'
// import "./styles/variables.css";
import "./style/global.css";
import { CheckOut } from './pages/CheckOut'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Wishlist } from './pages/Wishlist'
import Singleproduct from './pages/Singleproduct'
import { Userprofile } from './pages/Userprofile'









function App() {
  const [count, setCount] = useState(0)

  return (
    <>

{/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/singleproduct" element={<Singleproduct/>} />
        <Route path="/order" element={<CheckOut/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<Userprofile/>} />
      </Routes>

{/* </Router> */}
    </>
  )
}

export default App
