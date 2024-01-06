import { TestmonialData } from "./TestmonialData";
import TestimonialForm from "./TestimonialForm";

const Testimonialcard = ({ name, description }) => {
  return (
    <>
      <div className="  p-6 rounded-md shadow-md hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-lg sm:text-xl text-text-800 font-semibold mb-2 sm:mb-4 underline-offset-4 decoration-2 underline">
          {name}
        </h3>
        <p className=" text-sm sm:text-base font-normal  text-text-600">
          {description}
        </p>
      </div>
    </>
  );
};

const Testimonials = () => {
  return (
    <>
      <section
        id="Testimonials"
        className="min-h-screen px-6 lg:px-28 py-8  w-full">
        <h1 className="md:text-4xl text-2xl font-bold text-text-800 py-4">
          Testimonials
        </h1>

        <TestmonialData />
        <TestimonialForm />
      </section>
    </>
  );
};

export default Testimonials;
