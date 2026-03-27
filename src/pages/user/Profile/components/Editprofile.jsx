import { useEffect, useState } from "react";
import axios from "axios";

const EditProfile = () => {
  const [form, setForm] = useState({
    username: "",
    phone: "",
  });

  const token = localStorage.getItem("accessToken");

  const fetchProfile = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/user/profile",
      {
        headers: { Authorization: token },
      }
    );

    setForm({
      username: res.data.username || "",
      phone: res.data.phone || "",
    });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      "http://localhost:5000/api/user/update-profile",
      form,
      {
        headers: { Authorization: token },
      }
    );

    alert("Profile updated 🔥");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md">
      <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full rounded"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2 w-full rounded"
        />

        <button className="bg-black text-white px-4 py-2 rounded w-full">
          Save Changes
        </button>

      </form>
    </div>
  );
};

export default EditProfile;