import React, { createContext, useContext, useState } from 'react'
import { Maincontext } from './Maincontext';
import toast, { Toaster } from 'react-hot-toast';



export const Cartcontaxt=createContext();
export const Cartprovider = ({children}) => {
    // console.log("cartttt");
    
  const [cartItems, setCartItems] = useState([]);
const {data,setData}=useContext(Maincontext);
console.log(data,"dataaa");

  
    function handleAddToCart(id) {
      const result=data.find((product)=>product.id ===id);
      const exist=cartItems.some((item)=>item.id === id);

      if(!exist){
       setCartItems([...cartItems,result])
      }else{
        alert("This Item Already In Cart!!")
      }
      toast.success('Successfully Added!')
      
      console.log("Cart Items:", cartItems);

    }
  return (
    <>
   <Cartcontaxt.Provider value={{cartItems,setCartItems,handleAddToCart}}>
    {children}
    </Cartcontaxt.Provider>

     <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </>
  )
}
