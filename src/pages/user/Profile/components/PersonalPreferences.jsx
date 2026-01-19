import { profileData } from "../data/profileData";

const PersonalPreferences = () => {
  const { preferences } = profileData;

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-lg font-semibold mb-3">Personal Preferences</h3>

      <p className="text-sm">Gender: {preferences.gender}</p>
      <p className="text-sm">DOB: {preferences.dob}</p>
      <p className="text-sm">Fragrance Type: {preferences.fragrance}</p>
      <p className="text-sm">Allergies: {preferences.allergies}</p>
    </div>
  );
};

export default PersonalPreferences;
