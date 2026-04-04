import React, { createContext, useContext, useState } from 'react'
import { Maincontext } from './Maincontext';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import axios from 'axios';

const API = "http://localhost:5000/api/whishlist"


export const Wishlistcontaxt=createContext();
export const Wishlistprovider = ({children}) => {

  const [wishlist, setWishlist] = useState([])
const [removingId, setRemovingId] = useState(null);

const token = localStorage.getItem("accessToken");
  // const token = userInfo?.token;
  // console.log("TOKEN:", token);  
 const config = {
  headers: {
    Authorization: token,
  },
};


// ==========================
  // GET CART ITEMS
  // ==========================

  const fetchWhishlist = async () => {
    try {

      const res = await axios.get(
        API,
        config
      );

      setWishlist(res.data);

    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
  if (token) {
    fetchWhishlist();
  }
}, [token]);
  // ==========================
  // ADD TO CART
  // ==========================
const handleAddToWishlist = async (id) => {
  try {
    const res = await axios.post(
      API,
      { productId: id },
      config
    );

    setWishlist(res.data); // ✅ update instantly

    toast.success("Wishlist updated ❤️");

  } catch (error) {
    toast.error("Wishlist error");
  }
};



  // ==========================
  // REMOVE ITEM
  // ==========================

  const Removeitem = async (id) => {
  try {
    setRemovingId(id); // start animation

    setTimeout(async () => {
      const res = await axios.delete(
        `${API}/delete/${id}`,
        config
      );

      setWishlist(res.data); // update UI
      setRemovingId(null);

      toast.success("Item removed");

    }, 300); // match animation duration

  } catch (error) {
    toast.error("Remove failed");
  }
};

  
  

//    function hundlewishlist(id) {
//     const result = data.find((value) => value._id === id);
//   const exist = wishlist.some((item) => item._id === id);

    
//   if (!exist && result) {
//     setWishlist([...wishlist, result]);
//     toast.success("Added to Wishlist 💖");
//   } else {
//     toast.error("Already in Wishlist!");
//   }
//      if (likedList.includes(id)) {
//       setLikedList(likedList.filter((itemId) => itemId !== id)); // remove if already liked
//     } else {
//       setLikedList([...likedList, id]); // add if not liked
//     }

//     if (exist) {
//   setWishlist(wishlist.filter(item => item._id !== id));
//   toast("Removed from Wishlist ❌");
// }

//   }

  return (
    // <div>Wishlistcontext</div>
    <>
    <Wishlistcontaxt.Provider value={{wishlist,handleAddToWishlist,Removeitem,removingId }}>{children}</Wishlistcontaxt.Provider>
     <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </>
  )
}
