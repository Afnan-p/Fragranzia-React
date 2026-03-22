
import axios from "axios";
import { useEffect, useState } from "react";
const API = "http://localhost:5000/api/user/profile";
const ProfileInfo = () => {

  const [user,setUser] = useState(null)
  const [preview, setPreview] = useState(null);

 const fetchProfile = async () => {
  const token = localStorage.getItem("accessToken");

  const res = await axios.get(API, {
    headers: {
      Authorization: token, // ✅ no Bearer
    },
  });

  setUser(res.data);
};

  useEffect(()=>{
    fetchProfile()
  },[])

const handleImage = async (e) => {
  const file = e.target.files[0];
  const token = localStorage.getItem("accessToken");

  const formData = new FormData();
  formData.append("image", file);

  const res = await axios.post(
    "http://localhost:5000/api/user/upload-image",
    formData,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  setUser((prev) => ({
    ...prev,
    image: res.data.image,
  }));
  setPreview(URL.createObjectURL(file));
};

  if(!user) return <p>Loading...</p>
  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="text-lg font-semibold mb-4">Profile Information</h3>

      <div className="flex flex-col sm:flex-row items-center gap-5">
  <label className="cursor-pointer relative">
  <img
   src={
  preview
    ? preview
    : user?.image
    ? `http://localhost:5000/uploads/${user.image}`
    : "/default-avatar.png"
}
    className="w-24 h-24 rounded-full object-cover border"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs rounded-full opacity-0 hover:opacity-100 transition duration-300">
  Change
</div>

  <input
    type="file"
    onChange={handleImage}
    className="hidden"
  />
</label>


        <div className="text-sm space-y-1 text-center sm:text-left">
          <p><b>Name:</b>{user.username}</p>
          <p><b>Email:</b> {user.email} ✅</p>

          <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-xs w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
