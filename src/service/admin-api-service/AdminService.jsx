import React from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AdminService = () => {

    const axiosPrivate = useAxiosPrivate()

// ======================================== Product management ========================================

    const getProductData = async () => {
        const response = await axiosPrivate.get("/api/product");
        return response.data;
    };

    const postProductData = async (data) => {
        const response = await axiosPrivate.post("/api/product",data);
        return response.data;
    };
     const deleteProductData = async (ProductId) => {
        const response = await axiosPrivate.delete(`/api/product/${ProductId}`);
        return response.data;
    };

 // ========================================category management ========================================   
    const postCategory = async (data) => {
        const response = await axiosPrivate.post("/api/category",data);
        return response.data;
    };

    const getCategory = async () => {
        const response = await axiosPrivate.get("/api/category");
        return response;
    };
      const deletecategory = async (CategoryId) => {
        const response = await axiosPrivate.delete(`/api/category/${CategoryId}`);
        return response.data;
    };
    

    // const putProductData = async (ProductId, data) => {
    //     const response = await axiosPrivate.put(`/api/product/${ProductId}`, data);
    //     return response.data;
    // };

    
   
// ======================================== user management ========================================

    const getuser = async () => {
        const response = await axiosPrivate.get("/api/user/fetchuser");
        return response.data;
    };
     const userdelete = async (UserId) => { 
        const response = await axiosPrivate.delete(`/api/user/delete/${UserId}`);
        return response.data;
    };


    return { 
        getProductData,
        postProductData,
        // putProductData,
        deleteProductData,
        postCategory,
        getCategory,
        getuser,
        userdelete,
        deletecategory
       
    };
};

export default AdminService;