import { useEffect, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const ManageClasses = () => {
  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, []);
  return (
    <div className="overflow-x-auto">
      <Bounce cascade>
          <h1 className="mb-10 text-3xl font-bold text-center mt-5">Manage Classes</h1>
        </Bounce>
      <table className="table ">
        {/* head */}
        <thead>
          <tr className="bg-sky-800 text-white">
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor name</th>
            <th>Instructor email</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-sky-100">
          {/* row 1 */}
          <tr>
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
                <div className="font-bold">Hart Hagerty</div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>Purple</td>
            <th></th>
            <th></th>
            <th></th>
            <th className="flex flex-col">
              <button className="btn btn-outline mb-2 btn-success btn-xs">
                Approve
              </button>
              <button className="btn btn-outline mb-2 btn-error btn-xs">
                Deny
              </button>
              <button className="btn btn-outline mb-2 btn-info btn-xs">
                send feedback
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
