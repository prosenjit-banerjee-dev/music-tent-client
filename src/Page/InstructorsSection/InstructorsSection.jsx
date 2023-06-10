import { Bounce } from "react-awesome-reveal";
const InstructorsSection = () => {
  return (
    <div>
      <div className="lg:max-w-md mx-auto text-center">
        <Bounce cascade>
          <h1 className="mb-5 text-5xl font-bold">Music Tent</h1>
          <p className="mb-5">
            Welcome to Music Tent Instrumental Summer School! <br /> Join us for
            inspiring lessons, ensemble rehearsals, and performances led by
            accomplished educators and musicians.
          </p>
        </Bounce>
      </div>
    </div>
  );
};

export default InstructorsSection;
