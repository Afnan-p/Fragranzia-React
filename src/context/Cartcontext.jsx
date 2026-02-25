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
  const result = data.find((product) => product._id === id);
  const exist = cartItems.some((item) => item._id === id);

  if (!exist && result) {
    setCartItems([...cartItems, { ...result, quantity: 1 }]);
    toast.success("Successfully Added!");
  } else {
    toast.error("This Item Already In Cart.");
  }
}
function Removeitem(id) {
  const remove = cartItems.filter((item) => item._id !== id);
  setCartItems(remove);
}
   function Countfunction(id) {
  setCartItems((prev) =>
    prev.map((item) =>
      item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
}
   function DecrementFunction(id) {
  setCartItems((prev) =>
    prev.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
}
function Buyfunction() {
  // const Buyresult=cartItems.find((product)=>product.id ===id);
  // setBuyList(prev => [...prev, Buyresult])
 setBuyList(cartItems)
  // console.log(Buyresult,"buy");
  // console.log(Buyresult.quantity,"buy");
  
  // setBuyList([...cartItems, { ...Buyresult, quantity: 1 }])
}

    
  return (
    <>
   <Cartcontaxt.Provider value={{cartItems,setCartItems,handleAddToCart,Removeitem,Countfunction,DecrementFunction,Buyfunction,buyList,setBuyList}}>
    {children}
    </Cartcontaxt.Provider>

     <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </>
  )
}
