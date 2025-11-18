import React, { createContext, useContext, useState } from 'react'
import { Maincontext } from './Maincontext';


export const Cartcontaxt=createContext();
export const Cartprovider = ({children}) => {
    console.log("cartttt");
    
  const [cartItems, setCartItems] = useState([]);
const {data,setData}=useContext(Maincontext);
  
    function handleAddToCart(id) {
      const result=data.find((product)=>product.id ===id);
      setCartItems([...cartItems,result])
      console.log("Cart Items:", cartItems);

    }
  return (
   <Cartcontaxt.Provider value={{cartItems,setCartItems,handleAddToCart}}>
    {children}
    </Cartcontaxt.Provider>
  )
}
