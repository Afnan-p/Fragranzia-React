import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOP BAR (FIXED) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>
        <h2 className="font-semibold">My Account</h2>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 w-64 bg-white shadow-md min-h-screen transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* CLOSE BUTTON (MOBILE) */}
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {/* USER INFO */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              JD
            </div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">john@gmail.com</p>
            </div>
          </div>
        </div>

        {/* MENU */}
        <nav className="p-4 space-y-2">
          <Link to="/profile" onClick={() => setOpen(false)}>
            <SidebarItem
              label="Profile"
              icon="👤"
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            />
          </Link>

          <Link to="/orderdetails" onClick={() => setOpen(false)}>
            <SidebarItem
              label="Orders & Stats"
              icon="📦"
              active={activeTab === "orders"}
              onClick={() => setActiveTab("orders")}
            />
          </Link>

          <Link to="/paymentuser" onClick={() => setOpen(false)}>
            <SidebarItem
              label="Payment"
              icon="💳"
              active={activeTab === "payment"}
              onClick={() => setActiveTab("payment")}
            />
          </Link>

          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 mt-6">
            🚪 Logout
          </button>
        </nav>
      </aside>
    </>
  );
};

const SidebarItem = ({ label, icon, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition
        ${active ? "bg-blue-500 text-white" : "hover:bg-gray-100"}
      `}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default Sidebar;