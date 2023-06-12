import { Link } from "react-router-dom";
import piano from "../../../assets/Popular Classes/piano-class.jpg";
import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularClasses")
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
          <div
            key={popularClasses._id}
            className="card w-96 bg-sky-100 shadow-2xl image-full"
          >
            <figure>
              <img src={popularClasses.picture} alt={popularClasses.imageAlt} />
            </figure>
            <div className="card-body text-center">Class Name:
              <h2 className="text-3xl ">{popularClasses.name}</h2>
              <p>Total Students: {popularClasses.students}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
