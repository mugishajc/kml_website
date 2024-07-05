import PropTypes from "prop-types";

const Person = ({ className = "", image, name, position }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[1.5rem] max-w-full text-left text-[1.5rem] text-midnightblue-100 font-space-grotesk ${className}`}
    >
      <img
        className="self-stretch h-[22.125rem] rounded-xl max-w-full overflow-hidden shrink-0 object-cover object-top"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[0.875rem] gap-[2.25rem] mq450:flex-wrap mq450:gap-[1.125rem]">
        <div className="flex-1 flex flex-col items-start justify-center py-[0rem] pr-[1.125rem] pl-[0rem] box-border gap-[0.062rem] min-w-[7.375rem]">
          <h3 className="m-0 relative text-inherit leading-[2.438rem] font-bold font-inherit mq450:text-[1.188rem] mq450:leading-[1.938rem]">
            {name}
          </h3>
          <div className="h-[1.438rem] relative text-[1rem] leading-[172%] text-dimgray inline-block shrink-0">
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
