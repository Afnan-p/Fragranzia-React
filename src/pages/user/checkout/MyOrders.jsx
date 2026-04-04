import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../../components/Header";

export const MyOrders = () => {

  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("accessToken");

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/order/my",
        config
      );
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Header />

      <div className="max-w-[1000px] mx-auto p-6">

        <h2 className="text-3xl font-bold mb-6">My Orders</h2>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet 😔</p>
        ) : (

          orders.map((order) => (

            <div key={order._id} className="mb-6 p-5 bg-white shadow rounded-lg">

              {/* ORDER HEADER */}
              <div className="flex justify-between border-b pb-2 mb-3">
                <p className="text-sm text-gray-500">
                  Order ID: {order._id}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* ITEMS */}
              {order.items.map((item) => (

                <div key={item._id} className="flex gap-4 mb-3">

                  <img
                    src={`http://localhost:5000/uploads/${item.product.images[0]}`}
                    className="w-20 h-20 object-cover rounded"
                    alt=""
                  />

                  <div>
                    <h4 className="font-semibold">
                      {item.product.name}
                    </h4>
                    <p>Qty: {item.quantity}</p>
                    <p className="font-bold">
                      Rs {item.product.price * item.quantity}/-
                    </p>
                  </div>

                </div>

              ))}

              {/* TOTAL */}
              <div className="text-right font-bold mt-3">
                Total: Rs {order.totalAmount}/-
              </div>
              <p className="text-green-600 font-semibold">
  Delivered ✅
</p>

            </div>

          ))

        )}

      </div>
    </div>
  );
};