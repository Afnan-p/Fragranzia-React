import PageWrapper from "./components/PageWrapper";

const Orders = () => {
  return (
    <PageWrapper title="Orders">
      <table className="w-full bg-white rounded-xl shadow">
        <thead className="border-b">
          <tr className="text-left text-gray-500">
            <th className="p-4">Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Status</th>
            <th>Details</th>
          </tr> 
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4">#FR101</td>
            <td>Afnan</td>
            <td>Oud Perfume</td>
            <td className="text-orange-500">Pending</td>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg">Show</button>
          </tr>
          <tr>
            <td className="p-4">#FR102</td>
            <td>Rahul</td>
            <td>Rose Musk</td>
            <td className="text-green-600">Delivered</td>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg">Show</button>
          </tr>
        </tbody>
      </table>
    </PageWrapper>
  );
};

export default Orders;
