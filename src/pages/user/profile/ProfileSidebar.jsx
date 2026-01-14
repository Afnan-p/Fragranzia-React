export default function ProfileSidebar({ activeTab, setActiveTab }) {
  const itemClass = (tab) =>
    `p-3 rounded cursor-pointer ${
      activeTab === tab
        ? "bg-black text-white"
        : "hover:bg-gray-100"
    }`;

  return (
    <div className="w-64 bg-white border-r p-6">
      <h2 className="text-xl font-semibold mb-6">My Account</h2>

      <ul className="space-y-2">
        <li className={itemClass("profile")} onClick={() => setActiveTab("profile")}>
          User Profile
        </li>
        <li className={itemClass("orders")} onClick={() => setActiveTab("orders")}>
          Orders & Stats
        </li>
        <li className={itemClass("payments")} onClick={() => setActiveTab("payments")}>
          Payment History
        </li>
        <li className="p-3 rounded cursor-pointer text-red-500 hover:bg-red-50">
          Logout
        </li>
      </ul>
    </div>
  );
}
