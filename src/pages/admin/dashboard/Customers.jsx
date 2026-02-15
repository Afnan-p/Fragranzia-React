import PageWrapper from "./components/PageWrapper";

const Customers = () => {
  let customers=[
    {
      Id: Date.now(),
      Customer:"Afnan",
      Email:"afnan@gmail.com",
      Phone:"3265896532"
    },
    {
      Id: Date.now(),
      Customer:"Shaheed",
      Email:"Shaheed@gmail.com",
      Phone:"3265896532"
    },
    {
      Id: Date.now(),
      Customer:"Shijil",
      Email:"shijil@gmail.com",
      Phone:"3265896532"
    },
    {
      Id: Date.now(),
      Customer:"Hashir",
      Email:"hashir@gmail.com",
      Phone:"3265896532"
    }
  ]
  return (
    <PageWrapper title="Customers">
      <table className="w-full bg-white rounded-xl shadow">

      <ul className="bg-white rounded-xl shadow divide-y">
          <thead className="border-b">
          <tr className=" text-left text-gray-500">
            <th className="p-4">Order ID</th>
            <th className="p-4" >Customer</th>
            <th className="p-4">Product</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        {customers.map((item) => (
          <li key={1} className="p-4">
            {item.Customer}
          </li>
        ))}
      </ul>
      </table>

    </PageWrapper>
  );
};

export default Customers;
