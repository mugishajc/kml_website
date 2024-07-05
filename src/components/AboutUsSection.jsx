import React from "react";

const AboutUsSection = () => {
  return (
    <section id="about" className="flex flex-col items-center w-full px-16 py-20 mx-auto bg-white md:w-8/12 max-md:px-5 max-md:max-w-full">
      <h2 className="text-3xl font-bold leading-10 text-center text-midnightblue-100 max-md:max-w-full">
        Why Delasoft?
      </h2>
      <div className="mt-12 max-w-full w-[1024px] max-md:mt-10">
        <p className="text-base leading-6 text-center text-dimgray">
          Delasoft Ltd is a trusted IT consultancy company offering a wide range
          of services, including mobile and web app adipisicing development.
          Lorem ipsum adipisicing dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
