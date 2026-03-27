import React, { createContext, useContext, useState } from 'react'
import { Maincontext } from './Maincontext';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import axios from 'axios';

const API = "http://localhost:5000/api/cart"

export const Cartcontaxt=createContext();
export const Cartprovider = ({children}) => {
    // console.log("cartttt");
    
  const [cartItems, setCartItems] = useState([]);
// const {data,setData}=useContext(Maincontext);
// console.log(data,"dataaa");
const  [buyList,setBuyList]=useState([])


// const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const token = localStorage.getItem("accessToken");
  // const token = userInfo?.token;
  console.log("TOKEN:", token);
 const config = {
  headers: {
    Authorization: token,
  },
};


// ==========================
  // GET CART ITEMS
  // ==========================

  const fetchCart = async () => {
    try {

      const res = await axios.get(
        API,
        config
      );

      setCartItems(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, []);

//     function handleAddToCart(id) {
//   const result = data.find((product) => product._id === id);
//   const exist = cartItems.some((item) => item._id === id);

//   if (!exist && result) {
//     setCartItems([...cartItems, { ...result, quantity: 1 }]);
//     toast.success("Successfully Added!");
//   } else {
//     toast.error("This Item Already In Cart.");
//   }
// }


  // ==========================
  // ADD TO CART
  // ==========================

  const handleAddToCart = async (id) => {

    try {

      await axios.post(
        API,
        { productId: id },
        config
      );

      toast.success("Added to cart");

      fetchCart();

    } catch (error) {

      toast.error("Cart error");

    }
  };



  // ==========================
  // REMOVE ITEM
  // ==========================

  const Removeitem = async (id) => {

    try {

      await axios.delete(
        `${API}/delete/${id}`,
        config
      );

      toast.success("Item removed");

      fetchCart();

    } catch (error) {

      toast.error("Remove failed");

    }
  };
  
// function Removeitem(id) {
//   const remove = cartItems.filter((item) => item._id !== id);
//   setCartItems(remove);
// }
//    function Countfunction(id) {
//   setCartItems((prev) =>
//     prev.map((item) =>
//       item._id === id
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     )
//   );
// }

// ==========================
  // INCREMENT QUANTITY
  // ==========================

  const Countfunction = async (id) => {

    try {

      await axios.put(
        `${API}/increment/${id}`,
        {},
        config
      );

      fetchCart();

    } catch (error) {
      console.log(error);
    }

  };

   // ==========================
  // DECREMENT QUANTITY
  // ==========================

  const DecrementFunction = async (id) => {

    try {

      await axios.put(
        `${API}/decrement/${id}`,
        {},
        config
      );

      fetchCart();

    } catch (error) {
      console.log(error);
    }

  };
    // ==========================
  // BUY FUNCTION
  // ==========================

  const Buyfunction = () => {

    setBuyList(cartItems);

  };
//    function DecrementFunction(id) {
//   setCartItems((prev) =>
//     prev.map((item) =>
//       item._id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     )
//   );
// }

// function Buyfunction() {
  
//  setBuyList(cartItems)
 
// }

  return (
    <>
      <Cartcontaxt.Provider
        value={{
          cartItems,
          handleAddToCart,
          Removeitem,
          Countfunction,
          DecrementFunction,
          Buyfunction,
          buyList,
        }}
      >
        {children}
      </Cartcontaxt.Provider>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
