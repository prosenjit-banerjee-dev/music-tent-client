import InstructorsSection from "../InstructorsSection/InstructorsSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
    <Slider></Slider>
    <PopularClasses></PopularClasses>
    <InstructorsSection></InstructorsSection>
    </div>
  );
};

export default Home;
