import React, { useEffect, useState } from 'react'
import PageWrapper from './components/PageWrapper'
import axios from 'axios';
import { Link } from 'react-router-dom';


const API_URL = "http://localhost:5000/api/category";

export const Category = () => {
  const [category,setCategory] = useState([]);
  
    useEffect(() => {
      fetchCategory();
    }, []);

  const fetchCategory = async () => {
    try {
      const res = await axios.get(API_URL);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <PageWrapper title="Category">
        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-gray-200">
    
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Category Management
      </h2>

      <Link to= "/admin/add-Category">
<button className="px-5 py-2 bg-gradient-to-r from-black to-gray-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
        + Add Category
      </button>
</Link>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-gray-700">
        
        <thead>
          <tr className="border-b text-gray-500 uppercase text-xs tracking-wider">
            <th className="py-4 px-6 text-left">Category</th>
            <th className="py-4 px-6 text-left">description</th>
            <th className="py-4 px-6 text-left">status</th>
          </tr>
        </thead>

        <tbody>
          {category.map((category) => (
            <tr
              key={category._id}
              className="border-b hover:bg-gray-50 transition-all duration-200"
            >
              
              {/* Product Info */}
              <td className="py-4 px-6 flex items-center gap-4">
                <div>
                  <p className="font-semibold text-gray-800">
                    {category.name}
                  </p>
                  
                </div>
              </td>
              <td   className="py-4 px-6  items-center gap-4">
                <div>

                <p className="">
                    {category.description?.slice(0, 40)}...
                  </p>
                </div>
              </td>

              {/* status */}
              <td className="py-4 px-6">
                <span
  className={`px-3 py-1 text-xs rounded-full font-semibold ${
    category.isActive
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-600"
  }`}
>
  {category.isActive ? "Active" : "Inactive"}
</span>
              </td>

              {/* Action */}
              <td className="py-4 px-6">
                <div className="flex gap-3">
                  <button className="px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Edit
                  </button>

                  <button className="px-4 py-1 bg-red-900 text-white rounded-lg hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    </PageWrapper>
  )
}
