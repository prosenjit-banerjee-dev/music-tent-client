import { Link } from "react-router-dom";
import piano from "../../../assets/Popular Classes/piano-class.jpg";
import { useEffect, useState } from "react";
import {  Slide } from "react-awesome-reveal";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("https://music-tent-server.vercel.app/popularClasses")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);
  return (
    <div className="px-4 py-12 rounded-lg">
      <div className="max-w-lg mx-auto mt-20 mb-10 text-center">
        <p className="text-orange-400 uppercase mb-2 font-semibold">
          Our class
        </p>
        <h1 className="text-5xl font-bold">Popular Music Classes</h1>
        <p className="py-6">
          Discover new techniques, collaborate with fellow musicians, and create
          unforgettable musical memories.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {popularClasses?.map((popularClasses) => (
          <Slide key={popularClasses._id} >
            <div className="card w-96 bg-sky-100 shadow-2xl image-full">
              <figure>
                <img
                  src={popularClasses.classImage}
                  alt="Popular Class"
                />
              </figure>

              <div className="card-body text-center">
                Class Name:
                <h2 className="text-3xl ">{popularClasses.className}</h2>
                <p>Total Students: {popularClasses.enrolledStudents}</p>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
