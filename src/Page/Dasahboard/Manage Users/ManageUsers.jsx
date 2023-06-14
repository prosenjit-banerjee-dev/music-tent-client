import { useQuery } from "@tanstack/react-query";
import { Bounce } from "react-awesome-reveal";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  console.log(users);
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/${user?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Role Changed!", `${user.name} is an Admin Now!`, "success");
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/${user?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "instructor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            "Role Changed!",
            `${user.name} is an Instructor Now!`,
            "success"
          );
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <Bounce cascade>
        <h1 className="mb-10 mt-5 text-2xl font-semibold text-center">
          Manage Users
        </h1>
      </Bounce>
      <table className="max-w-lg mx-auto table rounded-xl">
        {/* head */}
        <thead className="bg-sky-600 text-white">
          <tr>
            <th>Index</th>
            <th>User Picture</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Role Change</th>
          </tr>
        </thead>
        <tbody className="bg-sky-100">
          {users?.map((user, index) => (
            <tr key={user?._id}>
              <th>{index + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={user?.photoURL}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">
                    {user?.name}
                    <br />
                    <span className="text-xs badge">({user?.role})</span>
                  </div>
                </div>
              </td>
              <td>{user?.email}</td>
              <th className="flex flex-col gap-y-2">
                {user?.role === "admin" ? (
                  <button className="btn mb-2 btn-xs" disabled="disabled">
                    Admin
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-outline mb-2 btn-error btn-xs"
                  >
                    Admin
                  </button>
                )}

                {user?.role === "instructor" ? (
                  <button className="btn mb-2 btn-xs" disabled="disabled">
                    Instructor
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-outline mb-2 btn-error btn-xs"
                  >
                    Instructor
                  </button>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
