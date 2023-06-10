import PopularInstructors from "../Popular Instructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
    <Slider></Slider>
    <PopularClasses></PopularClasses>
    <PopularInstructors></PopularInstructors>
    {/* TODO Popular Instructor and extra section */}
    </div>
  );
};

export default Home;
