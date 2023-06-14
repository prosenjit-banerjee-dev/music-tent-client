import { useEffect, useState } from "react";
import { JackInTheBox, Zoom } from "react-awesome-reveal";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://music-tent-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className=" px-4 py-12  rounded-lg">
      <div className="max-w-lg mx-auto mt-10 mb-10 text-center">
        <p className="text-orange-400 uppercase mb-2 font-semibold">
          instructors
        </p>
        <h1 className="text-5xl font-bold">Popular Instructors</h1>
        <p className="py-6">
          Discover new techniques, collaborate with fellow musicians, and create
          unforgettable musical memories.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <Zoom key={instructor._id}>
            <div className=" bg-sky-100 p-4 rounded-lg shadow-xl">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-48 h-48 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
              <p className="text-gray-500 text-sm">
                {instructor?.classes[0]},
                <span className="text-gray-500 text-sm">
                  {instructor?.classes[1]}
                </span>
              </p>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
