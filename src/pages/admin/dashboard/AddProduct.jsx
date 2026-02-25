import { useState } from "react";
import PageWrapper from "./components/PageWrapper";
const API_URL = "http://localhost:5000/api/product";
import axios from "axios";
const AddProduct = () => {

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    salePrice: '',
    category: '',
    stock: '',
  })
  const [image, setImage] = useState(null);
  //  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [stored, setStored] = useState([])

  // Handle normal input fields
  const handlechange = (e) => {
    // console.log(e.target.value);  
    const { name, value } = e.target
    // console.log(name,value,"value");

    setProduct({ ...product, [name]: value })

  }
  // Submit Form
  async function onhandlesubmit(e) {
    e.preventDefault();

    try {
      if (!image) {
        setMessage("Please select an image");
        return;

      }

      const formData = new FormData();

      // append fields
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("salePrice", product.salePrice);
      formData.append("category", product.category);
      formData.append("stock", product.stock);

      // append image
      formData.append("image", image);
      const res = await axios.post(API_URL, formData);
      alert("Product Added Successfully");
      console.log("productttttt",res.data);
      

      // Reset form
      setProduct({
        name: "",
        description: "",
        price: "",
        salePrice: "",
        category: "",
        stock: "",
      });

      setImage(null);
      setStored(res.data.data)
      console.log(stored, "asdfghjkl;");

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }


  };
  return (
    <PageWrapper title="Add Product">
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
        <form onSubmit={onhandlesubmit} className="space-y-4">

          {message && (
            <p className="text-sm font-medium text-green-600">
              {message}
            </p>
          )}

          {/* Product Name */}
          <div>
            <label className="block mb-1 font-medium">
              Product Name
            </label>
            <input
              name="name"
              value={product.name}
              onChange={handlechange}
              type="text"
              required
              className="w-full border px-4 py-2 rounded-lg"
              placeholder="Enter product name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handlechange}
              rows="4"
              required
              className="w-full border px-4 py-3 rounded-lg"
              placeholder="Product description"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">
              Price (₹)
            </label>
            <input
              name="price"
              value={product.price}
              onChange={handlechange}
              type="number"
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          {/* Sale Price */}
          <div>
            <label className="block mb-1 font-medium">
              Sale Price (₹)
            </label>
            <input
              name="salePrice"
              value={product.salePrice}
              onChange={handlechange}
              type="number"
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">
              Category
            </label>
            <select
              name="category"
              value={product.category}
              onChange={handlechange}
              required
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="">Select</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 font-medium">
              Stock
            </label>
            <input
              name="stock"
              value={product.stock}
              onChange={handlechange}
              type="number"
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-1 font-medium">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            // disabled={loading}
            className="bg-black text-white px-6 py-2 rounded-lg w-full"
          > Add Product
            {/* {loading ? "Adding..." : "Add Product"} */}
          </button>

        </form>
      </div>
    </PageWrapper>
  );
};

export default AddProduct;
