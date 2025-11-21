import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import './variables.css';
// import './global.css';
import { BrowserRouter } from "react-router-dom";
import { Cartprovider } from './context/Cartcontext.jsx';
import { Mainprovider } from './context/Maincontext.jsx';
// import "./styles/variables.css";
// import "./styles/global.css";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Mainprovider>
      <Cartprovider>
        <App />
      </Cartprovider>
      </Mainprovider>
    </StrictMode>
  </BrowserRouter>

)
