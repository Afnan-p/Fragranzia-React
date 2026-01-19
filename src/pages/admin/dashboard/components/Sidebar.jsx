import { NavLink } from "react-router-dom";

const menu = [
  "Dashboard",
  "Orders",
  "Products",
  "Add Product",
  "Customers",
  "Inventory",
  "Reviews",
  "Coupons",
  "Payments",
  "Settings",
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold text-yellow-400 mb-8">
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
                  ? "bg-yellow-400 text-black"
                  : "hover:bg-yellow-400 hover:text-black"
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
