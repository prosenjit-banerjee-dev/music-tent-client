import { Bounce } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const InstructorsSection = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
       <Helmet>
        <title>Music Tent | Instructors</title>
      </Helmet>
      <div className="lg:max-w-md mx-auto text-center">
        <Bounce cascade>
          <h1 className="mb-5 text-5xl font-bold mt-5">Our Instructors</h1>
          <p className="mb-5">
            Welcome to Music Tent Instructors Page <br />
          </p>
        </Bounce>
      </div>
      {/* Card */}
      <div className="grid lg:grid-cols-3 gap-10 mt-20 mb-20">
        {instructors?.map(
          (instructor) =>
            instructor?.role === "instructor" && (
              <div
                key={instructor._id}
                className="card max-w-xs mx-auto bg-sky-100 shadow-xl p-2"
              >
                <figure>
                  <img
                    src={instructor?.photoUrl}
                    className="max-w-xs rounded-xl"
                    alt="Instructors"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                    {instructor?.name}
                  </h2>
                  <p className="font-semibold text-gray-700 dark:text-gray-400">
                  Email: <span className="font-normal">{instructor?.email}</span>
                  </p>
                  {/* <p>
                Class Name: {instructor?.classes[0]}, {instructor.classes[1]}
              </p> */}
                  {/* <span>Taken Classes: {instructor?.classesTaken}</span> */}
                  <div className="card-actions mt-4">
                    {/* <button className="btn btn-info btn-sm">Join Class</button> */}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default InstructorsSection;
