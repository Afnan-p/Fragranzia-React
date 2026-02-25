import React, { createContext, useContext, useState } from 'react'
import { Maincontext } from './Maincontext';
import toast, { Toaster } from 'react-hot-toast';



export const Wishlistcontaxt=createContext();
export const Wishlistprovider = ({children}) => {
const {data,setData}=useContext(Maincontext);

  const [likedList, setLikedList] = useState([]);
  const [wishlist, setWishlist] = useState([])

   function hundlewishlist(id) {
    const result = data.find((value) => value._id === id);
  const exist = wishlist.some((item) => item._id === id);

    
  if (!exist && result) {
    setWishlist([...wishlist, result]);
    toast.success("Added to Wishlist 💖");
  } else {
    toast.error("Already in Wishlist!");
  }
     if (likedList.includes(id)) {
      setLikedList(likedList.filter((itemId) => itemId !== id)); // remove if already liked
    } else {
      setLikedList([...likedList, id]); // add if not liked
    }

    if (exist) {
  setWishlist(wishlist.filter(item => item._id !== id));
  toast("Removed from Wishlist ❌");
}

  }

  return (
    // <div>Wishlistcontext</div>
    <>
    <Wishlistcontaxt.Provider value={{hundlewishlist,likedList,wishlist}}>{children}</Wishlistcontaxt.Provider>
     <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </>
  )
}
