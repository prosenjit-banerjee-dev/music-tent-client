import { useQuery } from "@tanstack/react-query";
import { Bounce } from "react-awesome-reveal";
import Swal from "sweetalert2";
const ManageClasses = () => {
  const { data: totalClasses = [], refetch } = useQuery(
    ["totalclasses"],
    async () => {
      const res = await fetch("https://music-tent-server.vercel.app/classes");
      return res.json();
    }
  );
  console.log(totalClasses);

  const handleApprovedClass = (classes) => {
    fetch(`https://music-tent-server.vercel.app/classes/${classes?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire(
            "Class Approved!",
            "Successfully Approved this Class",
            "success"
          );
          refetch();
        }
      });
  };
  const handleDenyClass = (classes) => {
    Swal.fire({
      title: "Are you sure to deny?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://music-tent-server.vercel.app/classes/${classes?._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "deny" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              Swal.fire("Class Denied!", "Please send Feedback.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <Bounce cascade>
        <h1 className="mb-10 text-2xl font-semibold text-center mt-5">
          Manage Classes
        </h1>
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
          {totalClasses?.map((classes) => (
            <tr key={classes._id}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={classes.classImage}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{classes?.className}</div>
                </div>
              </td>
              <td>{classes.instructorName}</td>
              <td>{classes.instructorEmail}</td>
              <th>{classes.availableSeats}</th>
              <th>${classes.price}</th>
              <th>{classes.status}</th>
              <th className="flex flex-col">
                {classes?.status === "approved" && (
                  <>
                    <button
                      onClick={() => handleApprovedClass(classes)}
                      className="btn btn-outline mb-2 btn-success btn-xs"
                      disabled="disabled"
                    >
                      Approved
                    </button>
                    <button
                      onClick={() => handleDenyClass(classes)}
                      className="btn btn-outline mb-2 btn-error btn-xs"
                    >
                      Deny
                    </button>
                    <button className="btn btn-outline mb-2 btn-info btn-xs">
                      send feedback
                    </button>
                  </>
                )}
                {classes?.status === "deny" && (
                  <>
                    <button
                      onClick={() => handleApprovedClass(classes)}
                      className="btn btn-outline mb-2 btn-success btn-xs"
                      disabled="disabled"
                    >
                      Approved
                    </button>
                    <button
                      className="btn btn-outline mb-2 btn-error btn-xs"
                      disabled="disabled"
                    >
                      Deny
                    </button>
                    <button className="btn btn-outline mb-2 btn-info btn-xs">
                      Send FeedBack
                    </button>
                  </>
                )}
                {classes?.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleApprovedClass(classes)}
                      className="btn btn-outline mb-2 btn-success btn-xs"
                    >
                      Approved
                    </button>
                    <button
                      onClick={() => handleDenyClass(classes)}
                      className="btn btn-outline mb-2 btn-error btn-xs"
                    >
                      Deny
                    </button>
                    <button
                      className="btn btn-outline mb-2 btn-info btn-xs"
                      disabled
                    >
                      send feedback
                    </button>
                  </>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
