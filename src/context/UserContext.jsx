// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const fetchProfile = async () => {
//     const res = await axios.get("http://localhost:5000/api/user/profile");
//     setUser(res.data);
//   };

//   const updateProfile = async (data) => {
//     const res = await axios.put(
//       "http://localhost:5000/api/user/profile",
//       data
//     );
//     setUser(res.data);
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, updateProfile }}>
//       {children}
//     </UserContext.Provider>
//   );
// };