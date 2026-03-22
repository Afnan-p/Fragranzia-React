import axios from "axios";
import { createContext, useEffect, useState } from "react";
import AdminService from "../service/admin-api-service/AdminService";
import toast from "react-hot-toast";
// const API_URL = "http://localhost:5000/api/product";

export const Admincontext=createContext();
export const Adminprovider =({children})=>{
  const [products, setProducts] = useState([]);
  const {getProductData,deleteProductData}=AdminService()
  

 const fetchProducts = async () => {
    try {
      // const res = await axios.get(API_URL);
      const res = await getProductData();
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };
 useEffect(() => {
    fetchProducts();
  }, []);


  const Removeproducts = async (id) => {
    try {
      await deleteProductData(id)
      toast.success("Item removed");
    fetchProducts();

    } catch (error) {
            toast.error("Remove failed");
      
      
    }
  }

     return (
        
        <Admincontext.Provider value={{products,Removeproducts}}>
        {children}
        </Admincontext.Provider> 
      )

}