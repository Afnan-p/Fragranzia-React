import React, { createContext, useContext, useState } from 'react'
import { Maincontext } from './Maincontext';
import toast, { Toaster } from 'react-hot-toast';



export const Cartcontaxt=createContext();
export const Cartprovider = ({children}) => {
    // console.log("cartttt");
    
  const [cartItems, setCartItems] = useState([]);
const {data,setData}=useContext(Maincontext);
// console.log(data,"dataaa");
const  [buyList,setBuyList]=useState([])

  
    function handleAddToCart(id) {
      const result=data.find((product)=>product.id ===id);
      const exist=cartItems.some((item)=>item.id === id);

      if(!exist){
       setCartItems([...cartItems, { ...result, quantity: 1 }])
       toast.success('Successfully Added!')
      }else{
       toast.error("This Item Already In Cart.")

      }
      // toast.success('Successfully Added!')
      
      console.log("Cart Items:", cartItems);

    }

    function Removeitem(id) {
      const remove =cartItems.filter((item)=>item.id!==id);
      setCartItems(remove);
    }

    function Countfunction(id) {
      setCartItems(prev=>
        prev.map((item)=>item.id===id ?{ ...item, quantity: item.quantity + 1 }:item)
      )
    }

   function DecrementFunction(id) {
  setCartItems(prev =>
    prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      // .filter(item => item.quantity > 0)
  );
}
function Buyfunction(id) {
  const Buyresult=cartItems.find((product)=>product.id ===id);
  setBuyList(prev => [...prev, Buyresult])
  // console.log(Buyresult,"buy");
  // console.log(Buyresult.quantity,"buy");
  
  // setBuyList([...cartItems, { ...Buyresult, quantity: 1 }])
}

    
  return (
    <>
   <Cartcontaxt.Provider value={{cartItems,setCartItems,handleAddToCart,Removeitem,Countfunction,DecrementFunction,Buyfunction,buyList}}>
    {children}
    </Cartcontaxt.Provider>

     <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </>
  )
}
