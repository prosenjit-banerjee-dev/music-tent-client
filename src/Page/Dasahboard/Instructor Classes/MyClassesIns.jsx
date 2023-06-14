import { useEffect, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const MyClassesIns = () => {
  //! TODO Feedback update when admin denied and enrolled students shown;update
  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    fetch("https://music-tent-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, []);
  return (
    <>
      <div className="overflow-x-auto container">
        <Bounce cascade>
          <h1 className="mb-10 mt-5 text-2xl font-semibold text-center">
            My Classes
          </h1>
        </Bounce>
        <table className="max-w-md table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th className="px-4 py-2 border">Class Name</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Total Enrolled Students</th>
              <th className="px-4 py-2 border">Feedback</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          {myClasses?.map((myclass) => (
            <tbody key={myclass._id}>
              <tr className="bg-base-200">
                <th>1</th>
                <td>{myclass?.className}</td>
                <td>{myclass?.status}</td>
                <td>0</td>
                <td>
                  {myclass?.status == "pending" && myclass?.status == "approved"
                    ? "no feedback"
                    : ""}
                </td>
                <td>
                  <Link
                    to=""
                    className="btn btn-xs btn-outline btn-info hover:bg-gray-700"
                  >
                    update
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default MyClassesIns;
