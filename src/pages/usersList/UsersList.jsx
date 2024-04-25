import React from "react";
import useUserData from "../../hooks/useUserData";
import { MdModeEdit } from "react-icons/md";

const UsersList = () => {
  const { userData } = useUserData();

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
                  <button className="text-2xl btn">
                    <MdModeEdit />
                  </button>
                  <button className="text-2xl btn">x</button>
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
