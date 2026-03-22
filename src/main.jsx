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
import { Adminprovider } from './context/Adminproductcontext.jsx';
import { AuthProvider } from './context/Authcontext.jsx';
// import { UserProvider } from './context/UserContext.jsx';




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
      <Mainprovider>
      <Cartprovider>
        <Wishlistprovider>
            <Adminprovider>
              {/* <UserProvider> */}

        <App />
              {/* </UserProvider> */}

            </Adminprovider>
         </Wishlistprovider>
      </Cartprovider>
      </Mainprovider>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>

)
