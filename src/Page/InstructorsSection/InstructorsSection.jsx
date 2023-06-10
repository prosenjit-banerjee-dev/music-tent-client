import { Bounce } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
const InstructorsSection = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <div className="lg:max-w-md mx-auto text-center">
        <Bounce cascade>
          <h1 className="mb-5 text-5xl font-bold">Our Instructors</h1>
          <p className="mb-5">
            Welcome to Music Tent Instructors Page <br />
          </p>
        </Bounce>
      </div>
      {/* Card */}
      <div className="grid grid-cols-2 gap-10 mt-20 mb-20">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card w-3/4 mx-auto bg-base-100 shadow-xl">
            <figure>
              <img
                src={instructor.image}
                className="max-w-xs rounded-full max-h-32 "
                alt="Instructors"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {instructor.name}
              </h2>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>Email: {instructor.email}</p>
                <p>Classes Taken {instructor.classesTaken}</p>
              </p>
              <p>
                Prefer Instruments: {instructor.classes[0]},{" "}
                {instructor.classes[1]}
              </p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary">Join Class</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;
