import { useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddClasses = () => {
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const instructor = {
    displayName: "Azama Babu",
    email: "azama@example.com",
  };
  const handleAddClass = (e) => {
    e.preventDefault();
    if ((price && availableSeats) === 0) {
      return alert("Fields can't be zero");
    }
    const addedClass = {
      className,
      classImage,
      instructorName: instructor.displayName,
      instructorEmail: instructor.email,
      availableSeats,
      price,
      status: "pending",
    };
    console.log("Added class:", addedClass);

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Yeah!", "You Added the class Successfully!", "success");
          setClassName("");
          setClassImage("");
          setAvailableSeats(0);
          setPrice(0);
        }
      });
    // Reset the form fields
  };

  return (
    <div className="mx-auto p-4 ">
      <h1 className="text-2xl font-semibold mb-4 text-center">Add Class</h1>
      {/* Form */}
      <form
        onSubmit={handleAddClass}
        className="card bg-base-100 shadow-xl max-w-full p-10 mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="className" className="block mb-2 font-semibold">
            Class Name
          </label>
          <input
            type="text"
            placeholder="class name"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="classImage" className="block mb-2 font-semibold">
            Class Image Url
          </label>
          <input
            type="text"
            placeholder="photo url"
            id="classImage"
            required
            onChange={(e) => setClassImage(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorName" className="block mb-2 font-semibold">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            value={instructor.displayName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block mb-2 font-semibold">
            Instructor Email
          </label>
          <input
            type="text"
            id="instructorEmail"
            value={instructor.email}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block mb-2 font-semibold">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            value={availableSeats}
            required
            onChange={(e) => setAvailableSeats(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-semibold">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            required
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <input type="submit" value="Add Classes" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddClasses;
