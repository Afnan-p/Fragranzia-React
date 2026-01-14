export default function Orders() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Orders & Stats</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <OrderRow id="#1001" product="Perfume A" amount="₹2499" status="Delivered" />
          <OrderRow id="#1002" product="Perfume B" amount="₹1799" status="Pending" />
        </tbody>
      </table>
    </div>
  );
}

function OrderRow({ id, product, amount, status }) {
  return (
    <tr className="border-t">
      <td className="p-3">{id}</td>
      <td className="p-3">{product}</td>
      <td className="p-3 text-center">{amount}</td>
      <td className="p-3 text-center">
        <span
          className={`px-3 py-1 rounded text-sm ${
            status === "Delivered"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
