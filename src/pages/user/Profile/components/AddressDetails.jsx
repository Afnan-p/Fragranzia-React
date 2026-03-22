import { useEffect, useState } from "react";
import axios from "axios";

const AddressDetails = () => {
  const [addresses, setAddresses] = useState([]);

  const fetchAddress = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await axios.get("http://localhost:5000/api/user/address", {
      headers: {
        Authorization: token,
      },
    });

    setAddresses(res.data);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  // if (!addresses.length) return <p>No address added</p>;

  return (
    <div className="bg-white rounded-xl p-6 shadow">
  <h3 className="text-lg font-semibold mb-3">Address Details</h3>

  {addresses.length === 0 ? (
    <>
      <p className="mb-2">No address added</p>
      <button className="px-3 py-2 bg-black text-white rounded">
        + Add Address
      </button>
    </>
  ) : (
    <>
      {addresses.map((addr) => (
        <div key={addr._id} className="mb-3">
          <p className="text-sm">{addr.street}</p>
          <p className="text-sm">
            {addr.city}, {addr.state}
          </p>
          <p className="text-sm">
  {addr.zip}, {addr.country}
</p>
<p className="text-sm">📞 {addr.phone}</p>
          <p>Phone: {addr.phone}</p> 
        </div>
      ))}

      <button className="mt-3 px-3 py-2 bg-black text-white rounded">
        + Add Another Address
      </button>
    </>
  )}
</div>
  );
};

export default AddressDetails;