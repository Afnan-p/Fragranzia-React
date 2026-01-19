import { profileData } from "../data/profileData";

const AddressDetails = () => {
  const { address } = profileData;

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-lg font-semibold mb-3">Address Details</h3>

      <p className="text-sm">{address.house}</p>
      <p className="text-sm">
        {address.city}, {address.state}
      </p>
      <p className="text-sm">
        {address.pincode}, {address.country}
      </p>
    </div>
  );
};

export default AddressDetails;
