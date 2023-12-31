import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-sky-100 py-12">
      <Helmet>
        <title>Music Tent | About Us</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Music Tent Instrument Learning School is a premier institute
            dedicated to providing high-quality music education to aspiring
            musicians of all ages and skill levels. With a team of experienced
            instructors and a passion for music, we strive to create a nurturing
            and inspiring learning environment for our students.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our school offers a wide range of instrument learning programs,
            including piano, guitar, violin, drums, and more. We believe in a
            holistic approach to music education, combining technical
            proficiency with creative expression and musical theory.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Music Tent, we are committed to helping our students unlock their
            full musical potential. Our instructors are highly skilled
            professionals who are dedicated to providing personalized guidance
            and support to each student. Whether you are a beginner or an
            advanced player, we have a program that's tailored to your needs and
            goals.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Join us at Music Tent Instrument Learning School and embark on a
            rewarding musical journey. Discover the joy of playing an
            instrument, develop your skills, and connect with a community of
            passionate musicians. We can not wait to help you achieve your
            musical dreams!
          </p>
        </div>
        <Link to="/">
          <button className="btn btn-info btn-sm btn-outline mt-8">back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
