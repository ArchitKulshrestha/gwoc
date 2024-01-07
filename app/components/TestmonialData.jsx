import { getTestimonials } from "@/sanity/utilsSanity";

const Testimonialcard = ({ name, description }) => {
  return (
    <>
      <div className="  p-6  rounded-xl shadow   hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-[#cde8fe]/50 to-[#9bd1fd]/40">
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

export const TestmonialData = async () => {
  const Testimonialsdata = await getTestimonials();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {Testimonialsdata.map((item, index) => {
        return <Testimonialcard key={index} {...item} />;
      })}
    </div>
  );
};
