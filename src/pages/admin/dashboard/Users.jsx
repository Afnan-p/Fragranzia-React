import { useEffect, useState } from "react";
import PageWrapper from "./components/PageWrapper";
import axios from "axios";
import AdminService from "../../../service/admin-api-service/AdminService";
// const API ="http://localhost:5000/api/auth/fetchuser"

const Users = () => {
    const [users,setUsers]= useState([])
    const {getuser,userdelete}=AdminService()
    

   const fetchUsers = async () => {
  try {
    const data = await getuser();
    setUsers(data);
    console.log("dataaaa", data);
  } catch (error) {
    console.log("fetch failed");
  }
};
    useEffect(() => {
        fetchUsers();
      }, []); 


const handleDelete = async (id) => {
  try {

     if (!window.confirm("Delete this user?")) return;
    await userdelete(id);

    fetchUsers();

  } catch (error) {

    console.log("Delete failed");

  }
};
    
  return (
    <PageWrapper title="Users">
      <table className="w-full bg-white rounded-xl shadow">
        <thead className="border-b">
          <tr className="text-left text-gray-500">
            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr> 
        </thead>
       <tbody className="p-4">
  {users.map((user) => (
    <tr className="border-b" key={user._id}>
      <td className="mt-2 px-4 py-2">
        <b>{user.username}</b>
      </td>

      <td>{user.email}</td>

      <td className={user.role === "admin" ? "text-red-500" : "text-yellow-500"}>
        {user.role}
      </td>

      <td>
        <button
          onClick={() => handleDelete(user._id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </PageWrapper>
  );
};

export default Users;
