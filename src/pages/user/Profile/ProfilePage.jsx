import { useState } from "react";

import ProfileSidebar from "./components/ProfileSidebar";
import ProfileInfo from "./components/ProfileInfo";
import AddressDetails from "./components/AddressDetails";
import AccountInfo from "./components/AccountInfo";
import ShoppingActivity from "./components/ShoppingActivity";
import PersonalPreferences from "./components/PersonalPreferences";
import SecuritySettings from "./components/SecuritySettings";
import Orders from "./components/Orders";
import Wishlist from "./components/Wishlist";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-black text-white">
        <h1 className="text-lg font-semibold capitalize">{activeTab}</h1>
        <button onClick={() => setMenuOpen(true)} className="text-2xl">
          ☰
        </button>
      </div>

      <div className="flex">
        <ProfileSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {menuOpen && (
          <ProfileSidebar
            mobile
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onClose={() => setMenuOpen(false)}
          />
        )}

        {/* CONTENT */}
        <div className="flex-1 p-4 sm:p-6 space-y-6">
          {activeTab === "profile" && (
              <>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}
              <ProfileInfo />
  <AddressDetails />
  <AccountInfo />
              <PersonalPreferences />
{/* </div> */}
            </>
          )}

          {activeTab === "orders" && <Orders />}
          {activeTab === "wishlist" && <Wishlist />}
          {activeTab === "security" && <SecuritySettings />}
          {activeTab === "shopping" && <ShoppingActivity />}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProfilePage;
