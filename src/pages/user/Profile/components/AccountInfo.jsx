import { profileData } from "../data/profileData";

const AccountInfo = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-lg font-semibold mb-3">Account Information</h3>

      <p className="text-sm"><b>User ID:</b> {profileData.userId}</p>
      <p className="text-sm"><b>Account Created:</b> {profileData.createdAt}</p>

      <p className="text-sm mt-2">
        <b>Status:</b>
        <span className="ml-2 px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
          {profileData.status}
        </span>
      </p>
    </div>
  );
};

export default AccountInfo;
