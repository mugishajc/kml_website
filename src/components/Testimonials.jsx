import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const REVIEWS = [
  {
    id: 6,
    name: "Alice",
    role: "Data Scientist",
    avatar: "https://i.pravatar.cc/150?img=23",
    review: `Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.`,
  },
  {
    id: 0,
    name: "Bob",
    role: "Architect",
    avatar: "https://i.pravatar.cc/150?img=13",
    review: `A hidden gem for tech enthusiasts. The selection is vast, and the ease of discovering new tech is addictively delightful!`,
  },
  {
    id: 2,
    name: "Charlie",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?img=8",
    review: `Results speak louder than words. I've never seen progress like this. The workflows are challenging but oh-so-rewarding. Kudos!`,
  },
  {
    id: 3,
    name: "Diana",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=41",
    review: `It's very easy to customize and categorize lists for new projects/task categories.`,
  },
  {
    id: 13,
    name: "Jean Claude Mugisha",
    role: "Senior Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=57",
    review: `An adventure for the curious mind. Every click led to a new discovery. It's like a digital journey through the wonders of the internet.`,
  },
  {
    id: 4,
    name: "Fiona",
    role: "Marketing Specialist",
    avatar: "https://i.pravatar.cc/150?img=42",
    review: `Plan, create, and explore seamlessly. This service made my creative dreams a reality. Smooth navigation, and the recommendations were spot on.`,
  },
  {
    id: 10,
    name: "George",
    role: "Software Developer",
    avatar: "https://i.pravatar.cc/150?img=21",
    review: `A game-changer for organization. Tasks, calendars, notes – everything neatly synced. My life has never been this streamlined. Pure genius!`,
  },
  {
    id: 11,
    name: "Hannah",
    role: "Graphic Designer",
    avatar: "https://i.pravatar.cc/150?img=18",
    review: `Drowning in a sea of creativity. The content here is a visual feast. An endless source of inspiration for my artistic endeavors.`,
  },
  {
    id: 5,
    name: "Ian",
    role: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?img=33",
    review: `Discovering new beats is addictive with this service. The curated playlists are spot-on, and the personalized recommendations are eerily accurate. A music lover's paradise!`,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (direction) => {
    const totalSlides = REVIEWS.length;
    let newIndex = currentIndex;

    if (direction === "prev") {
      newIndex = (totalSlides + currentIndex - 1) % totalSlides;
    } else {
      newIndex = (totalSlides + currentIndex + 1) % totalSlides;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-slate-200 to-slate-50 text-slate-800">
      <main className="w-full max-w-2xl p-8 my-4 text-center bg-white border-2 md:max-w-4xl border-gainsboro rounded-3xl sm:p-16">
        <h1 className="text-xl font-bold md:text-3xl">A word from our customers</h1>
        <p className="my-2 text-sm">
          We've been helping businesses do their best since 2023
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-[60px_auto_60px] [grid-template-areas:'slider_slider'_'nav-left_nav-right'] sm:[grid-template-areas:'nav-left_slider_nav-right'] gap-2 sm:gap-6">
          <button
            data-slide="prev"
            className="[grid-area:nav-left] material-symbols-outlined"
            onClick={() => handleSlide("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <div id="slider" className="[grid-area:slider]">
            <div
              id="list-cards"
              className="grid [grid-template-areas:'stack'] overflow-hidden"
            >
              {REVIEWS.map((review, idx) => (
                <TestimonialCard
                  key={review.id}
                  review={review}
                  isVisible={idx === currentIndex}
                />
              ))}
            </div>
          </div>
          <button
            data-slide="next"
            className="[grid-area:nav-right] material-symbols-outlined"
            onClick={() => handleSlide("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;
