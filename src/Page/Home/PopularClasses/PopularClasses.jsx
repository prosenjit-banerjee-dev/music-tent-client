import { Link } from "react-router-dom";
import piano from "../../../assets/Popular Classes/piano-class.jpg";

const PopularClasses = () => {
  return (
    <div className="mb-20">
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
        {/* card 1 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={piano} alt="Piano Class" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Piano</h2>
            <p>Students:</p>
            <p></p>
            <div className="card-actions justify-center">
              <Link to="">
                <button className="btn btn-primary">Learn More..</button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={piano} alt="Piano Class" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Piano</h2>
            <p>Students:</p>
            <p></p>
            <div className="card-actions justify-center">
              <Link to="">
                <button className="btn btn-primary">Learn More..</button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={piano} alt="Piano Class" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Piano</h2>
            <p>Students:</p>
            <p></p>
            <div className="card-actions justify-center">
              <Link to="">
                <button className="btn btn-primary">Learn More..</button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={piano} alt="Piano Class" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Piano</h2>
            <p>Students:</p>
            <p></p>
            <div className="card-actions justify-center">
              <Link to="">
                <button className="btn btn-primary">Learn More..</button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={piano} alt="Piano Class" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Piano</h2>
            <p>Students:</p>
            <p></p>
            <div className="card-actions justify-center">
              <Link to="">
                <button className="btn btn-primary">Learn More..</button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={piano} alt="Piano Class" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Piano</h2>
            <p>Students:</p>
            <p></p>
            <div className="card-actions justify-center">
              <Link to="">
                <button className="btn btn-primary">Learn More..</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
