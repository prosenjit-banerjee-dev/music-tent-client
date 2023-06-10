import PopularInstructors from "../Popular Instructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import SliderSection from "../Slider/SliderSection";


const Home = () => {
  return (
    <div>
    <SliderSection></SliderSection>
    <PopularClasses></PopularClasses>
    <PopularInstructors></PopularInstructors>
    {/* TODO Popular Instructor and extra section */}
    </div>
  );
};

export default Home;
