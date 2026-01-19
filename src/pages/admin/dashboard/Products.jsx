import PageWrapper from "./components/PageWrapper";

const Products = () => {
  return (
    <PageWrapper title="Products">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Oud", "Rose", "Musk"].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="font-semibold">{item} Perfume</h2>
            <p className="text-gray-500 mt-2">₹2,499</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">
              Edit
            </button>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Products;
