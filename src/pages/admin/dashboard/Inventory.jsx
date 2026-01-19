import PageWrapper from "./components/PageWrapper";

const Inventory = () => {
  return (
    <PageWrapper title="Inventory">
      <div className="bg-white p-6 rounded-xl shadow">
        <p>Oud Perfume – 5 left ⚠️</p>
        <p className="mt-2">Rose Musk – 20 in stock</p>
      </div>
    </PageWrapper>
  );
};

export default Inventory;
