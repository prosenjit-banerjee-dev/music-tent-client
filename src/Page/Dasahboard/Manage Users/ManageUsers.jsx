import { Bounce } from "react-awesome-reveal";

const ManageUsers = () => {
  return (
    <div className="overflow-x-auto container">
      <Bounce cascade>
        <h1 className="mb-10 mt-5 text-3xl font-bold text-center">
          Manage Users
        </h1>
      </Bounce>
      <table className="max-w-md mx-auto table rounded-xl">
        {/* head */}
        <thead className="bg-sky-600 text-white">
          <tr>
            <th>Index</th>
            <th>User Picture</th>
            <th>User Info</th>
            <th>Role Change</th>
          </tr>
        </thead>
        <tbody className="bg-sky-100">
          <th>1</th>
          <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </td>
          <td>
            <div>
              <div className="font-bold">
                Hart Hagerty
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </div>
            </div>
          </td>
          <th className="flex flex-col gap-y-2">
            <button className="btn btn-outline mb-2 btn-error btn-xs">
              Admin
            </button>
            <button className="btn btn-outline mb-2 btn-info btn-xs">
              Instructor
            </button>
          </th>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
