import { profileData } from "../data/profileData";

const ProfileInfo = () => {
  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="text-lg font-semibold mb-4">Profile Information</h3>

      <div className="flex flex-col sm:flex-row items-center gap-5">
        <img
          src={profileData.avatar}
          alt="profile"
          className="w-24 h-24 rounded-full"
        />

        <div className="text-sm space-y-1 text-center sm:text-left">
          <p><b>Name:</b> {profileData.name}</p>
          <p><b>Email:</b> {profileData.email} ✅</p>
          <p><b>Mobile:</b> {profileData.phone} ✅</p>

          <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-xs w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
