import React from "react";
import useSelectClasses from "../../../hooks/useSelectClasses";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [selectedClasses, refetch] = useSelectClasses();
  const handleDeleteClass = (classes) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedclasses/${classes._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="drawer-content  flex flex-col items-center justify-center gap-10 py-12">
      <h1 className="text-2xl font-semibold">My Selected Classes</h1>
      {selectedClasses?.map((classes) => (
        <div key={classes._id} className="card w-96 bg-sky-100 shadow-xl">
          <button
            onClick={() => handleDeleteClass(classes)}
            className="btn btn-circle btn-outline btn-sm btn-error"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <figure className="px-10 pt-10">
            <img
              src={classes.classImage}
              alt="selected class"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="flex items-center gap-x-2">
              Class name:{" "}
              <span className="card-title">{classes.className}</span>
            </p>
            <p>Your Instructor: {classes.instructorName}</p>
            <p>$ {classes.price}</p>
            <div className="card-actions">
              <Link to="/payment">
                <button className="btn btn-info ">Pay Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySelectedClass;
