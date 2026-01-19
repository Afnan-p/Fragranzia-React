import PageWrapper from "./components/PageWrapper";

const Customers = () => {
  return (
    <PageWrapper title="Customers">
      <ul className="bg-white rounded-xl shadow divide-y">
        {["Afnan", "Rahul", "Sneha"].map((name) => (
          <li key={name} className="p-4">
            {name}
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export default Customers;
