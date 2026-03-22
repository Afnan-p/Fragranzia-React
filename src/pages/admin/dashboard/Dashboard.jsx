import { useContext } from "react";
import PageWrapper from "./components/PageWrapper";
import { Admincontext } from "../../../context/Adminproductcontext";

const Dashboard = () => {
  const {products}=useContext(Admincontext)
  
  return (
    <PageWrapper title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          ["Products", products.length],
          ["Orders", "350"],
          ["Revenue", "₹1,25,000"],
          ["Customers", "210"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="bg-white p-6 rounded-xl shadow"
          >
            <p className="text-gray-500">{title}</p>
            <h2 className="text-2xl font-bold mt-2">{value}</h2>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
