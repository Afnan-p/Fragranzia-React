import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>

     
    </>
  )
}

export default App
