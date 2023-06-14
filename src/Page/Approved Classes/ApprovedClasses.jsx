import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FiCheckCircle } from "react-icons/fi";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const ApprovedClasses = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes/approved")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const handleSelectClass = (classData) => {
    if (!user) {
      Swal.fire("Please log in before selecting a class.");
      return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      );
    }
    const { className, instructorName, price, classImage, _id } = classData;
    const { displayName, email } = user;
    const myClass = {
      className,
      instructorName,
      price,
      classImage,
      displayName,
      email,
      classId: _id,
    };
    fetch("http://localhost:5000/selectedclasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Yeah!", "This class is selected!", "success");
        }
      });
  };
  return (
    <div className="bg-gray-100 py-12">
       <Helmet>
        <title>Music Tent | Classes</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Available Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classData) => (
            <Zoom key={classData._id}>
              <div
                className={`bg-${
                  classData.availableSeats === 0 ? "red" : "white"
                } p-6 rounded-lg shadow-md flex flex-col items-center justify-center`}
              >
                <img
                  src={classData.classImage}
                  alt={classData.className}
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">
                  Class: {classData.className}
                </h2>
                <p className="text-gray-500 mb-2">
                  Instructor: {classData.instructorName}
                </p>
                <p
                  className={`text-lg mb-4 ${
                    classData.availableSeats === 0
                      ? "text-red-500"
                      : "text-gray-800"
                  }`}
                >
                  Available Seats:{" "}
                  {classData.availableSeats === 0
                    ? "0"
                    : classData.availableSeats}
                </p>
                <p className="text-lg font-semibold mb-4">
                  Price: ${classData.price}
                </p>
                <button
                  className="btn btn-info"
                  onClick={() => handleSelectClass(classData)}
                  disabled={classData.availableSeats === 0}
                >
                  {classData.availableSeats === 0 ? "Sold Out" : "Select"}
                  {classData.availableSeats !== 0 && (
                    <FiCheckCircle className="inline-block ml-2" />
                  )}
                </button>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovedClasses;
