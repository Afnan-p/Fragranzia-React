import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import './variables.css';
// import './global.css';
import { BrowserRouter } from "react-router-dom";
import { Cartprovider } from './context/Cartcontext.jsx';
import { Mainprovider } from './context/Maincontext.jsx';
import { Wishlistprovider } from './context/Wishlistcontext.jsx';




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Mainprovider>
      <Cartprovider>
        <Wishlistprovider>
        <App />
         </Wishlistprovider>
      </Cartprovider>
      </Mainprovider>
    </StrictMode>
  </BrowserRouter>

)
