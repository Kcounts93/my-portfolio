import React, { useRef, useEffect } from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Web Designer/Video Editor",
      company: "EML Radio - Full time",
      date: "Oct 2019 - Aug 2020",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
    {
      title: "Marketing & Social Media Intern",
      company: "The Jacklin Arts Center",
      date: "Jan 2022 - Apr 2022",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
    {
      title: "Server/Bartender",
      company: "Moon Time Couer d'Alene",
      date: "May 2020 - Jun 2022",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
    {
      title: "Web Designer/Developer",
      company: "Marketing Beaver",
      date: "Jan 2022 - Jun 2022",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
    {
      title: "Front End Developer/Designer",
      company: "Ignitium",
      date: "Jun 2022 - Present",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
  ];

  const sliderRef = useRef(null);
  const scrollAmount = 450; // Adjust the scroll amount as needed

  const handleSlide = (direction) => {
    const slider = sliderRef.current;
    const startScrollLeft = slider.scrollLeft;
    const targetScrollLeft =
      direction === "left"
        ? startScrollLeft - scrollAmount
        : startScrollLeft + scrollAmount;
    const duration = 400; // Adjust the duration as needed
    const startTime = performance.now();

    function step(currentTime) {
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        const newScrollLeft =
          startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;
        slider.scrollLeft = newScrollLeft;
        requestAnimationFrame(step);
      } else {
        slider.scrollLeft = targetScrollLeft;
      }
    }

    requestAnimationFrame(step);
  };

  useEffect(() => {
    // Set the initial scroll position when the component mounts
    const initialScrollPosition = 700; // Adjust this value as needed
    const slider = sliderRef.current;
    slider.scrollLeft = initialScrollPosition;
  }, []);

  return (
    <div name="experience" className="relative flex items-center px-4">
      <FiChevronLeft
        onClick={() => handleSlide("left")}
        size={50}
        className="hover:opacity-60 hover:scale-125 duration-300 mr-1 block"
      />
      <div
        ref={sliderRef}
        className="py-5 overflow-x-scroll overflow-hidden flex flex-nowrap scroll-container"
      >
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="inline-block items-start hover:scale-105 ease-in-out duration-300 w-[350px] p-5 cursor-default"
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center cursor-default w-6 h-6 bg-charcoal rounded-full ring-0 ring-putty dark:bg-charcoal sm:ring-8 dark:ring-charcoal shrink-0">
                <FiCalendar className="text-putty" />
              </div>
              <div className="hidden sm:flex bg-putty h-0.5 dark:bg-charcoal w-[350px] "></div>
            </div>
            <div className="mt-3 flex flex-col">
              <time className="block mb-2 text-md font-medium leading-none text-darkputty whitespace-nowrap">
                {experience.date}
              </time>
              <h3 className="text-md font-medium text-darkputty whitespace-nowrap">
                {experience.title}
              </h3>
              <h3 className="text-md font-medium my-1 text-darkputty whitespace-nowrap">
                {experience.company}
              </h3>
              <p className="flex-1 font-medium text-sm text-darkputty pr-4">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <FiChevronRight
        onClick={() => handleSlide("right")}
        size={50}
        className="hover:opacity-60 hover:scale-125 duration-300 ml-1"
      />
    </div>
  );
};

export default Experience;
