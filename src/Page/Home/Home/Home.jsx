import { Helmet } from "react-helmet-async";
import PopularInstructors from "../Popular Instructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import SliderSection from "../Slider/SliderSection";
import TestimonialsSection from "../Testimonials Section/TestimonialsSection";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Tent | Home</title>
      </Helmet>
      <SliderSection></SliderSection>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <TestimonialsSection></TestimonialsSection>
      {/* TODO Popular Instructor and extra section */}
    </div>
  );
};

export default Home;
