import React from "react";
import Usersidebar from "./Usersidebar";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";


const Profile = () => {
  return (
    <div className="all">
        <Header/>
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <Usersidebar />

      {/* Right Content */}
      <main className="flex-1 p-8 space-y-6">

        {/* Personal Information */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <button className="text-blue-600 hover:underline">Edit</button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><span className="font-medium">Name:</span> John Doe</p>
            <p><span className="font-medium">Email:</span> john@gmail.com</p>
            <p><span className="font-medium">Phone:</span> +91 9876543210</p>
            <p><span className="font-medium">DOB:</span> 12-05-1999</p>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <button className="text-blue-600 hover:underline">Edit</button>
          </div>

          <p className="text-sm text-gray-700">
            221B Baker Street <br />
            Kochi, Kerala – 682001
          </p>
        </div>

        {/* Orders & Statistics */}
        {/* <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Orders & Statistics</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xl font-bold">12</p>
              <p className="text-sm text-gray-600">Total Orders</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xl font-bold">9</p>
              <p className="text-sm text-gray-600">Delivered</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xl font-bold">3</p>
              <p className="text-sm text-gray-600">Pending</p>
            </div>
          </div>
        </div> */}

        {/* Payment Methods */}
        {/* <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Payment Methods</h3>
            <button className="text-blue-600 hover:underline">Add New</button>
          </div>

          <p className="text-sm text-gray-700">
            💳 Visa **** 4242 <br />
            🏦 UPI: john@upi
          </p>
        </div> */}

      </main>
    </div>
    <Footer/>
    </div>
  );
};

export default Profile;