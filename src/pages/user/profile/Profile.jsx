import { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import UserProfile from "./UserProfile";
import Orders from "./Orders";
import Payments from "./Payments";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-8 bg-white">
        {activeTab === "profile" && <UserProfile />}
        {activeTab === "orders" && <Orders />}
        {activeTab === "payments" && <Payments />}
      </div>
    </div>
  );
}
