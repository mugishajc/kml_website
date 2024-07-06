import React from "react";

const TestimonialCard = ({ review, isVisible }) => {
  return (
    <div
      className={`card [grid-area:stack] transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <blockquote
        className={`bg-black text-white rounded-md p-6 text-sm transition-all duration-500 relative isolate
        before:absolute
        before:bg-black
        before:w-4
        before:h-4
        before:rotate-45
        before:-bottom-2
        before:left-2/4
        before:-translate-x-2/4
        before:-z-10
        before:-translate-y-full
        ${
          isVisible
            ? "scale-100 before:translate-y-0"
            : "scale-0 before:-translate-y-full"
        }
      `}
      >
        {`"${review.review}"`}
      </blockquote>
      <div
        className={`details text-sm transition-all duration-500 flex flex-col items-center gap-2 mt-6
        ${
          isVisible ? "scale-100 translate-y-0" : "scale-0 translate-y-[150px]"
        }`}
      >
        <img
          src={review.avatar}
          alt=""
          className="object-cover w-16 h-16 rounded-full"
        />
        <div>
          <p className="text-sm font-bold">{review.name}</p>
          <p className="text-xs">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
