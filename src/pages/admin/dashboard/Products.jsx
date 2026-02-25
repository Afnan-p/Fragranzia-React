import { useEffect, useState } from "react";
import axios from "axios";
import PageWrapper from "./components/PageWrapper";

const API_URL = "http://localhost:5000/api/product";
const IMG_URL = "http://localhost:5000/uploads";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <PageWrapper title="Products">
  <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-gray-200">
    
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Product Management
      </h2>

      <button className="px-5 py-2 bg-gradient-to-r from-black to-gray-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
        + Add Product
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-gray-700">
        
        <thead>
          <tr className="border-b text-gray-500 uppercase text-xs tracking-wider">
            <th className="py-4 px-6 text-left">Product</th>
            <th className="py-4 px-6 text-left">Price</th>
            <th className="py-4 px-6 text-left">Category</th>
            <th className="py-4 px-6 text-left">Stock</th>
            <th className="py-4 px-6 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="border-b hover:bg-gray-50 transition-all duration-200"
            >
              
              {/* Product Info */}
              <td className="py-4 px-6 flex items-center gap-4">
                <img
                  src={`${IMG_URL}/${product.images[0]}`}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded-xl shadow-md"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {product.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {product.description?.slice(0, 40)}...
                  </p>
                </div>
              </td>

              {/* Price */}
              <td className="py-4 px-6">
                <p className="font-semibold text-black">
                  ₹{product.salePrice}
                </p>
                <p className="line-through text-gray-400 text-xs">
                  ₹{product.price}
                </p>
              </td>

              {/* Category */}
              <td className="py-4 px-6">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 font-medium">
                  {product.category}
                </span>
              </td>

              {/* Stock */}
              <td className="py-4 px-6">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    product.stock > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `In Stock (${product.stock})`
                    : "Out of Stock"}
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
  );
};

export default Products;