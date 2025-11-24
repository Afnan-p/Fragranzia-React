import React, { useContext, useState } from "react";
import { Cartcontaxt } from "../context/Cartcontext";
import { Header } from "../components/Header";

export const Payment = () => {
  const { buyList } = useContext(Cartcontaxt);

  // ADDRESS STATES
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    house: "",
    city: "",
    pincode: ""
  });

  // PAYMENT STATES
  const [payment, setPayment] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardInfo, setCardInfo] = useState({ card: "", expiry: "", cvv: "" });
  const [bank, setBank] = useState("");

  // ORDER PLACED Display
  const [orderPlaced, setOrderPlaced] = useState(false);

  // TOTALS
  const GrandTotal = buyList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = 40;
  const gst = GrandTotal * 0.05;
  const finalAmount = GrandTotal + deliveryCharge + gst;

  // ADDRESS VALIDATION
  function validateAddress() {
    if (
      !address.name ||
      !address.phone ||
      !address.house ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please fill all address fields!");
      return false;
    }
    if (address.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return false;
    }
    if (address.pincode.length !== 6) {
      alert("Pincode must be 6 digits");
      return false;
    }
    return true;
  }

  // PAYMENT VALIDATION
  function validatePayment() {
    if (payment === "") {
      alert("Please select a payment method!");
      return false;
    }
    if (payment === "upi" && upiId.trim() === "") {
      alert("Enter UPI ID");
      return false;
    }
    if (payment === "card") {
      if (cardInfo.card.length !== 16) {
        alert("Card number must be 16 digits");
        return false;
      }
      if (!cardInfo.expiry) {
        alert("Enter card expiry date");
        return false;
      }
      if (cardInfo.cvv.length !== 3) {
        alert("CVV must be 3 digits");
        return false;
      }
    }
    if (payment === "netbank" && bank === "") {
      alert("Select a bank");
      return false;
    }
    return true;
  }

  // FINAL ORDER FUNCTION
  function handlePlaceOrder() {
    if (!validateAddress() || !validatePayment()) return;

    setOrderPlaced(true);

    console.log("ORDER DETAILS:", {
      address,
      payment,
      upiId,
      cardInfo,
      bank,
      finalAmount,
      items: buyList
    });

    alert("Order Successfully Placed (Frontend Only)");
  }

  return (
    <div className="ordering-page">
      <Header />
      <h2 className="text-center text-3xl mt-4 font-bold">Checkout</h2>

      <div className="flex justify-around p-5 gap-6 flex-wrap">

        {/* LEFT SIDE — ADDRESS + PAYMENT */}
        <div className="w-[400px] p-5 border rounded shadow">

          {/* ADDRESS */}
          <h3 className="text-xl font-bold mb-3">Delivery Address</h3>
          <input className="w-full p-2 mb-2 border rounded" placeholder="Full Name"
            onChange={(e) => setAddress({ ...address, name: e.target.value })} />
          <input className="w-full p-2 mb-2 border rounded" placeholder="Phone Number"
            onChange={(e) => setAddress({ ...address, phone: e.target.value })} />
          <input className="w-full p-2 mb-2 border rounded" placeholder="House / Street"
            onChange={(e) => setAddress({ ...address, house: e.target.value })} />
          <input className="w-full p-2 mb-2 border rounded" placeholder="City"
            onChange={(e) => setAddress({ ...address, city: e.target.value })} />
          <input className="w-full p-2 mb-2 border rounded" placeholder="Pincode"
            onChange={(e) => setAddress({ ...address, pincode: e.target.value })} />

          {/* PAYMENT SECTION */}
          <h3 className="text-xl font-bold mt-6 mb-3">Payment Methods</h3>

          {/* GPAY */}
          <div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
            <span>Google Pay</span>
            <input type="radio" name="payment" value="gpay"
              onChange={() => setPayment("gpay")} />
          </div>

          {/* COD */}
          <div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
            <span>Cash on Delivery (COD)</span>
            <input type="radio" name="payment" value="cod"
              onChange={() => setPayment("cod")} />
          </div>

          {payment === "cod" && (
            <div className="mt-2 p-3 border rounded bg-green-50 text-sm">
              Pay cash when product arrives.
            </div>
          )}

          {/* UPI */}
          <div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
            <span>Paytm / PhonePe / Amazon Pay</span>
            <input type="radio" name="payment" value="upi"
              onChange={() => setPayment("upi")} />
          </div>

          {payment === "upi" && (
            <input type="text" className="w-full p-2 border rounded mb-2"
              placeholder="Enter UPI ID"
              onChange={(e) => setUpiId(e.target.value)} />
          )}

          {/* CARD */}
          <div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
            <span>Credit / Debit Card</span>
            <input type="radio" name="payment" value="card"
              onChange={() => setPayment("card")} />
          </div>

          {payment === "card" && (
            <div className="mt-2">
              <input className="w-full p-2 border rounded mb-2" maxLength="16"
                placeholder="Card Number"
                onChange={(e) => setCardInfo({ ...cardInfo, card: e.target.value })} />
              <input className="w-full p-2 border rounded mb-2"
                placeholder="Expiry (MM/YY)"
                onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })} />
              <input className="w-full p-2 border rounded mb-2" maxLength="3"
                placeholder="CVV"
                onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })} />
            </div>
          )}

          {/* NET BANKING */}
          <div className="payment-option flex justify-between items-center p-3 border rounded mb-2">
            <span>Net Banking</span>
            <input type="radio" name="payment" value="netbank"
              onChange={() => setPayment("netbank")} />
          </div>

          {payment === "netbank" && (
            <select className="w-full p-2 border rounded mt-2"
              onChange={(e) => setBank(e.target.value)}>
              <option value="">Select Bank</option>
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
              <option>Kotak</option>
            </select>
          )}

        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="w-[400px] p-5 border rounded shadow">
          <h3 className="text-xl font-bold mb-3">Order Summary</h3>

          <div className="flex justify-between mb-2 border-b pb-2">
            <p>Items Total:</p>
            <p>₹ {GrandTotal}</p>
          </div>

          <div className="flex justify-between mb-2 border-b pb-2">
            <p>Delivery:</p>
            <p>₹ {deliveryCharge}</p>
          </div>

          <div className="flex justify-between mb-2 border-b pb-2">
            <p>GST (5%):</p>
            <p>₹ {gst.toFixed(2)}</p>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <p>Final Amount:</p>
            <p>₹ {finalAmount.toFixed(2)}</p>
          </div>

          <button
            className="w-full mt-5 bg-black text-white p-3 rounded"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>

          {/* ORDER CONFIRMATION BLOCK */}
          {orderPlaced && (
            <div className="mt-5 p-4 bg-green-100 border rounded">
              <h3 className="font-bold text-lg">Order Confirmed!</h3>
              <p><b>Name:</b> {address.name}</p>
              <p><b>Phone:</b> {address.phone}</p>
              <p><b>Address:</b> {address.house}, {address.city}</p>
              <p><b>Pincode:</b> {address.pincode}</p>
              <p><b>Payment:</b> {payment.toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
