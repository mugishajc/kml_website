import { team } from "../data";
import Person from "./Person";

const Team = ({ className = "" }) => {
  return (
    <section
      id="team"
      className={`bg-white w-full flex flex-col items-center justify-center py-[4rem] px-[1.25rem] box-border gap-[4rem] max-w-full text-center text-[3rem] text-midnightblue-100 font-space-grotesk mq450:gap-[1rem] mq750:gap-[2rem] ${className}`}
    >
      <div className="w-[31.563rem] overflow-hidden flex flex-col items-center justify-center py-[0.737rem] px-[0rem] box-border gap-[0.281rem] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[3.875rem] font-bold font-inherit  mq450:leading-[2.25rem] text-3xl">
          We Have Expert Team
        </h1>
        <div className="w-[22.438rem] relative text-[1rem] leading-[1.75rem] text-dimgray inline-block max-w-full">
          Meet our expert team members
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center relative gap-[1.875rem] max-w-full grid-cols-[repeat(3,_minmax(277px,_1fr))] text-left text-[1.5rem] mq750:grid-cols-[minmax(277px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(277px,_481px))]">
        {team?.length > 0 && team?.map((person) => (
          <Person
          image={person?.image}
          name={person?.name}
          position={person?.position}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
