import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const UsersTable = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/all-users")
      .then((res) => {
        setUsers(res?.data?.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="w-full min-h-[80vh] py-[6rem] flex flex-col justify-center items-center">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users?.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p>{index + 1}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p>{item.name}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p>{item.email}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p>{item.isAdmin === true ? "Yes" : "No"}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button>
                    {item.isAdmin === true ? "Remove Admin" : "Make Admin"}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-red-500">
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsersTable;
