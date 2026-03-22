// import { useContext, useState } from "react";
// import { UserContext } from "../../../../context/UserContext";

// const Editprofile = () => {
//   const { user, updateProfile } = useContext(UserContext);

//   const [form, setForm] = useState({
//     username: user?.username || "",
//     email: user?.email || "",
//     mobile: user?.mobile || ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateProfile(form);
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow">
//       <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         <input
//           type="text"
//           name="username"
//           value={form.username}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//         />

//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//         />

//         <input
//           type="text"
//           name="mobile"
//           value={form.mobile}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//         />

//         <button className="bg-black text-white px-4 py-2 rounded">
//           Save Changes
//         </button>

//       </form>
//     </div>
//   );
// };

// export default Editprofile;