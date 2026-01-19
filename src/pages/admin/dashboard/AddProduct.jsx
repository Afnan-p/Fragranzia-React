import PageWrapper from "./components/PageWrapper";

const AddProduct = () => {
  return (
    <PageWrapper title="Add Product">
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
        <form className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">
              Product Name
            </label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-lg"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Price
            </label>
            <input
              type="number"
              className="w-full border px-4 py-2 rounded-lg"
              placeholder="Enter price"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Category
            </label>
            <select className="w-full border px-4 py-2 rounded-lg">
              <option>Men</option>
              <option>Women</option>
              <option>Unisex</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Stock
            </label>
            <input
              type="number"
              className="w-full border px-4 py-2 rounded-lg"
              placeholder="Stock quantity"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Product Image
            </label>
            <input
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
