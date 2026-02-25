import { NavLink } from "react-router-dom";

const menu = [
  "Dashboard",
  "Orders",
  "Products",
  "Catogory",
  "Add Product",
  "Add Category",
  "Customers",
  "Inventory",
  "Reviews",
  "Coupons",
  "Payments",
  "Settings",
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white   rounded-lg shadow text-black min-h-screen p-6">
      <h1 className="text-2xl font-bold text-blue-400 mb-8">
        Fragranzia
      </h1>

      <ul className="space-y-3">
        {menu.map((item) => (
          <NavLink
            key={item}
                to={`/admin/${item.toLowerCase().replace(" ", "-")}`}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-400 text-black"
                  : "hover:bg-blue-400 hover:text-black"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
