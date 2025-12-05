import React, { createContext, useContext, useState } from 'react'
import { Maincontext } from './Maincontext';
import toast, { Toaster } from 'react-hot-toast';



export const Wishlistcontaxt=createContext();
export const Wishlistprovider = ({children}) => {
const {data,setData}=useContext(Maincontext);

  const [likedList, setLikedList] = useState([]);
  const [wishlist, setWishlist] = useState([])

   function hundlewishlist(id) {
    const result = data.find((value) => value.id === id)
    const exist = wishlist.some((item) => item.id === id)

    if (!exist) {
      const list = [...wishlist, result]
      setWishlist(list)
      toast.success('Successfully Added!')
    } else {
      toast.error("This Item Already in Cart.")
    }
     if (likedList.includes(id)) {
      setLikedList(likedList.filter((itemId) => itemId !== id)); // remove if already liked
    } else {
      setLikedList([...likedList, id]); // add if not liked
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
