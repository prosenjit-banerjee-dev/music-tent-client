import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../../assets/Slider/slider1.webp";
import slider2 from "../../../assets/Slider/slide2.jpg";
import slider3 from "../../../assets/Slider/slider3.jpg";
import slider4 from "../../../assets/Slider/slider4.jpg";
import { Bounce } from "react-awesome-reveal";


const SliderSection = () => {
  return (
    <Carousel>
      <div className="hero">
        <img className="w-full" src={slider1} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:max-w-md">
        <Bounce cascade>
            <h1 className="mb-5 text-5xl font-bold">Music Tent</h1>
            <p className="mb-5">
              Welcome to Music Tent Instrumental Summer School! <br /> Join us
              for inspiring lessons, ensemble rehearsals, and performances led
              by accomplished educators and musicians.
            </p>
            </Bounce>
            <button className="btn btn-primary">Join Classes</button>
          </div>
          
        </div>
      </div>
      <div className="hero ">
        <img className="w-full" src={slider3} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Music Tent</h1>
            <p className="mb-5">
              Welcome to Music Tent Instrumental Summer School! <br /> Join us
              for inspiring lessons, ensemble rehearsals, and performances led
              by accomplished educators and musicians.
            </p>
            <button className="btn btn-primary">Join Classes</button>
          </div>
        </div>
      </div>
      <div className="hero">
        <img className="w-full" src={slider2} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Music Tent</h1>
            <p className="mb-5">
              Welcome to Music Tent Instrumental Summer School! <br /> Join us
              for inspiring lessons, ensemble rehearsals, and performances led
              by accomplished educators and musicians.
            </p>
            <button className="btn btn-primary">Join Classes</button>
          </div>
        </div>
      </div>
      <div className="hero">
        <img className="w-full" src={slider4} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Music Tent</h1>
            <p className="mb-5">
              Welcome to Music Tent Instrumental Summer School! <br /> Join us
              for inspiring lessons, ensemble rehearsals, and performances led
              by accomplished educators and musicians.
            </p>
            <button className="btn btn-primary">Join Classes</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default SliderSection;
