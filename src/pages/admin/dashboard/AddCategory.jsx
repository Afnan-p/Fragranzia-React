import React from 'react'
import PageWrapper from './components/PageWrapper'
import { useState } from 'react'
const API_URL = "http://localhost:5000/api/category";

import axios from 'axios'

const Addcategory = () => {
   const [stored ,setStored]=useState([])

  const [category,setCategory]=useState({
    name :"",
    description:"",
  })

   const handlechange = (e)=>{
      console.log(e.target.value);    
     const {name ,value} = e.target
      // console.log(name,value,"value");
      
      setCategory({...category,[name]:value})

    }

    
    async function onhandlesubmit(e) {
    e.preventDefault();

   if (!category.name || !category.description) return;
    const res = await axios.post(API_URL, category);
    setCategory({
      name: '',
      description: '',
    })
    setStored(res.data)
    console.log("esdrftghyjklDetails", stored);
    // setDatas(prev =>console.log(prev))  
    // ;
    // setAllData(prev => [...prev, res.data]);
    // fetchtasks()
  }
  return (
      <PageWrapper title="Add Category">
            <div className="min-h-screen bg-gray-100">
      {/* PAGE HEADER */}
      <div className="bg-white shadow px-8 py-5">
        <h1 className="text-2xl font-semibold text-gray-800">
          Add Category
        </h1>
        <p className="text-sm text-gray-500">
          Create a new product category
        </p>
      </div>

      {/* FORM WRAPPER */}
      <div className="px-8 py-8">
        <form onSubmit={onhandlesubmit}className="bg-white rounded-lg shadow p-8 max-w-9xl">
          {/* BASIC INFO */}
          <h2 className="text-lg font-semibold mb-6 border-b pb-2">
            Category Information
          </h2>

          {/* CATEGORY NAME */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Category Name
            </label>
            <input
            onChange={handlechange}
              value={category.name}
              name="name"

              type="text"
              placeholder="Eg: Premium Perfumes"
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
            onChange={handlechange}
              value={category.description}
             name="description"

              rows="4"
              placeholder="Category description"
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* STATUS */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">
              Status
            </label>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="status" className="accent-blue-600" />
                <span>Active</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="status" className="accent-blue-600" />
                <span>Inactive</span>
              </label>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-4 border-t pt-6">
            <button
              type="button"
              className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Save Category
            </button>
          </div>

        </form>
      </div>
   
    </div>
    </PageWrapper>
  )
}

export default Addcategory