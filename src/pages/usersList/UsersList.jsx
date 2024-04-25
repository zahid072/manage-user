import React from "react";
import useUserData from "../../hooks/useUserData";
import { MdDelete, MdModeEdit } from "react-icons/md";

const UsersList = () => {
  const { userData, setReFatch } = useUserData();
  

  const handleEdit = (id)=>{
    console.log("Edit", id)
  }
  const handleDelete = (id)=>{
    
   console.log("delete", id)
   fetch(`http://localhost:5000/users2/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      setReFatch(true)
    })
    
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>{user?.status}</td>
                <td className="flex items-center gap-4">
                  <button onClick={()=>{
                    handleEdit(user?._id)
                  }} className="text-2xl btn">
                    <MdModeEdit />
                  </button>
                  <button onClick={()=>{
                    handleDelete(user?._id)
                  }} className="text-2xl btn text-red-500">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
