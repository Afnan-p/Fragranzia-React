import { useState } from "react";
import PageWrapper from "./components/PageWrapper";

const AddProduct = () => {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: []

  })

  const handlechange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setProduct({
        ...product,
        image: files
      });
    } else {
      setProduct({
        ...product,
        [name]: value
      });
    }
  };


  const handlsubmit = (e) => {
    e.preventDefault();

    console.log(product, "all deatils of product");
    setProduct({
      name: "",
      price: "",
      category: "",
      stock: "",
      image: []
    });

  }
  return (
    <PageWrapper title="Add Product">
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
        <form onSubmit={handlsubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">
              Product Name
            </label>
            <input onChange={handlechange}
              name="name"
              value={product.name}
              type="text"
              className="w-full border px-4 py-2 rounded-lg"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Price
            </label>
            <input onChange={handlechange}
              name="price"
              value={product.price}
              type="number"
              className="w-full border px-4 py-2 rounded-lg"
              placeholder="Enter price"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Category
            </label>
            <select
              name="category"
              value={product.category}
              onChange={handlechange}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="">Select</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>

          </div>

          <div>
            <label className="block mb-1 font-medium">
              Stock
            </label>
            <input onChange={handlechange}
              name="stock"
              value={product.stock}
              type="number"
              className="w-full border px-4 py-2 rounded-lg"
              placeholder="Stock quantity"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Product Image
            </label>
            <input onChange={handlechange}
              name="image"
              type="file"
              className="w-full  border px-4 py-2 rounded-lg "
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg"
          >
            Add Product
          </button>

        </form>
      </div>
    </PageWrapper>
  );
};

export default AddProduct;
