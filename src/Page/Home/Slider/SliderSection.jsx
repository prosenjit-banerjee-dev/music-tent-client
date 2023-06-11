import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../../assets/Slider/slider1.webp";
import slider2 from "../../../assets/Slider/slide2.jpg";
import slider3 from "../../../assets/Slider/slider3.jpg";
import slider4 from "../../../assets/Slider/slider4.jpg";
import { Bounce } from "react-awesome-reveal";

const SliderSection = () => {
  return (
    <div className="carousel w-full">
      {/* slide 01 */}
      <div id="slide1" className="carousel-item relative w-full hero">
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* slide 02 */}
      <div id="slide2" className="carousel-item relative w-full hero">
        <img className="w-full" src={slider4} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:max-w-md">
            <Bounce cascade>
              <h1 className="mb-5 text-5xl font-bold">Explore Your Talent</h1>
              <p className="mb-5">
                Welcome to Music Tent Instrumental Summer School! <br /> Join us
                for inspiring lessons, ensemble rehearsals, and performances led
                by accomplished educators and musicians.
              </p>
            </Bounce>
            <button className="btn btn-primary">Join Classes</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* slide 03 */}
      <div id="slide3" className="carousel-item relative w-full hero">
        <img className="w-full" src={slider3} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:max-w-md">
            <Bounce cascade>
              <h1 className="mb-5 text-5xl font-bold">Expert Instructors</h1>
              <p className="mb-5">
                Welcome to Music Tent Instrumental Summer School! <br /> Join us
                for inspiring lessons, ensemble rehearsals, and performances led
                by accomplished educators and musicians.
              </p>
            </Bounce>
            <button className="btn btn-primary">Join Classes</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* slide 04 */}
      <div id="slide4" className="carousel-item relative w-full hero">
        <img className="w-full" src={slider2} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:max-w-md">
            <Bounce cascade>
              <h1 className="mb-5 text-5xl font-bold">Online Facilities</h1>
              <p className="mb-5">
                Welcome to Music Tent Instrumental Summer School! <br /> Join us
                for inspiring lessons, ensemble rehearsals, and performances led
                by accomplished educators and musicians.
              </p>
            </Bounce>
            <button className="btn btn-primary">Join Classes</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
