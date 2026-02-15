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

    const putProductData = async (ProductId, data) => {
        const response = await axiosPrivate.put(`/api/product/${ProductId}`, data);
        return response.data;
    };
    
    const deleteProductData = async (ProductId) => {
        const response = await axiosPrivate.delete(`/api/product/${ProductId}`);
        return response.data;
    };


    return { 
        getProductData,
        postProductData,
        putProductData,
        deleteProductData
       
    };
};

export default AdminService;