import React from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "react-responsive-carousel";
import { Bounce, Fade, JackInTheBox } from "react-awesome-reveal";

const TestimonialsSection = () => {
  const { data: testimonials = [], refetch } = useQuery(
    ["testimonials"],
    async () => {
      const res = await fetch("https://music-tent-server.vercel.app/testimonials");
      return res.json();
    }
  );
  console.log(testimonials);
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto mt-10 mb-10 text-center">
          <p className="text-orange-400 uppercase mb-2 font-semibold">
            Testimonials
          </p>
          <h1 className="text-5xl font-bold">Students Feedback</h1>
        </div>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={false}
        >
          {testimonials.map((testimonial) => (
            <Bounce key={testimonial?._id}>
              <motion.div
                className=" bg-sky-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  className="rounded-xl max-w-xs mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {testimonial?.name}
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  {testimonial?.quote}
                </p>
                <p className="flex items-center gap-2 text-yellow-500 py-2">
                  <FaStar></FaStar>
                  <span className="text-gray-500 font-bold">
                    {" "}
                    {testimonial?.rating}
                  </span>
                </p>
              </motion.div>
            </Bounce>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSection;
