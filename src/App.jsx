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
import { Ordering } from './pages/Ordering'









function App() {
  const [count, setCount] = useState(0)

  return (
    <>

{/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/order" element={<Ordering/>} />
      </Routes>

{/* </Router> */}
    </>
  )
}

export default App
