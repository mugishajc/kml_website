import React from "react";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center w-full px-16 py-20 mx-auto bg-[#f7f9fb] rounded-lg -top-24 md:w-8/12 max-md:px-5 max-md:max-w-full"
    >
      <h2 className="text-3xl font-bold leading-10 text-center text-midnightblue-100 max-md:max-w-full">
        Why KML Innovate Campany Ltd?
      </h2>
      <div className="mt-12 max-w-full w-[1024px] max-md:mt-10">
        <p className="text-base leading-6 text-center text-dimgray">
        To guarantee the prosperity and expansion of your firm, it is necessary to choose a right IT partner. Here are some reasons why we at KML IT Consulting are unique:

Experience in various sectors: We have proficient IT specialists who have worked across different industries such as: development, support, business analytics and can therefore offer industry-specific solutions for you.
Strategic Technological Partnership: Cutting-edge solutions and resources that foster invention and efficiency within the business are guaranteed by our partnership with the major information technology providers.
Customized Solutions: We understand that every company has its uniqueness; thus, we provide customized IT strategies or solutions depending on your goals and budget, may be it is enhancing security, optimizing infrastructure or leveraging cloud technologies.
Responsive Support and Maintenance: To curb downtime we offer 24/7 support team to sort out any IT needs you may have so as to make sure everything runs smoothly.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
