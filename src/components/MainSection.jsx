import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Web Development", "Mobile Apps", "IT Consultancy"];

const MainSection = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="flex items-center justify-center w-full px-16 py-10 text-white bg-primary max-md:px-5 max-md:max-w-full">
      <div className="justify-end w-11/12 max-w-full mb-32 md:w-10/12 max-md:mb-10">
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row max-md:gap-0">
          <div className="flex flex-col w-full md:w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pt-3.5 pr-5 my-auto text-5xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <h1 className="text-3xl break-before-all max-md:max-w-full md:text-[45px] lg:text-5xl md:text-start text-center tracking-[-0.02em]">
                Trust us for excellency in{" "}
                <span className="text-white">
                  <TextTransition
                    direction="down"
                    inline
                    springConfig={presets.wobbly}
                  >
                    {TEXTS[index % TEXTS.length]}.
                  </TextTransition>
                </span>{" "}
              </h1>
              <a
                href="#contact"
                className="self-center justify-center py-3 mx-auto mt-5 text-base text-center transition-all duration-300 bg-white rounded text-primary md:mx-0 md:mt-12 md:self-start hover:bg-ghostwhite-100 px-7 hover:scale-105 max-md:px-5"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col ml-5 w-full md:w-[40%] max-md:ml-0 mt-5 md:mt-0 max-md:w-full">
            <div className="flex flex-col self-stretch justify-center py-1 grow max-md:max-w-full">
              <img
                loading="lazy"
                src={`/banners/${index % TEXTS.length}.png`}
                alt="Developer illustration"
                className="w-10/12 md:w-[500px] mx-auto max-w-max transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
