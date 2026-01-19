import { profileData } from "../data/profileData";

const SecuritySettings = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-lg font-semibold mb-3">Security Settings</h3>

      <p className="text-sm">Last Login: {profileData.lastLogin}</p>
      <p className="text-sm">
        Two-Factor Authentication:
        <span className="ml-2 text-green-600 font-medium">
          {profileData.twoFA ? "Enabled" : "Disabled"}
        </span>
      </p>
    </div>
  );
};

export default SecuritySettings;
