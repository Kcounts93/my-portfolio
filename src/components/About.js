import React from "react";
import Me from "../assets/temp-me.jpg";

const About = () => {
  return (
    <div name="about" className="w-full px-20 pt-10">
      <div className="text-heading-section mb-10">
        <h2 className="text-putty text-3xl text-light mb-2">About me</h2>
        <hr />
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="xs:w-[100%] lg:w-[50%] pr-5">
          <p className="text-xl leading-10">
            Hello, I'm Kayla Counts, a Front End Developer with a passion for
            creating responsive and visually captivating applications. Whether
            it's harnessing the power of Bootstrap, Tailwind, or Material UI for
            seamless, responsive layouts or infusing life into web elements with
            JavaScript. I thrive on the intersection of code and design.
            <br />
            <br />
            With a foundation in Graphic and Web Design, I've spent 4 years
            practicing my eye for clean, user-friendly interfaces and efficient
            code. I've crafted hundreds of landing pages. I embarked on a
            journey of technical growth at NuCamp Coding bootcamp, demonstarting
            proficiency in Bootstrap, React, React Native, Google Cloud,
            Node.js, Express.js, and MongoDB. While I possess the skills to
            create Full Stack applications and React Native apps, I spend my
            time honing in my Front-End expertise and staying at the forefront
            of emerging technologies.
            <br />
            <br />
            Currently pursuing a Bachelors of Science in Software Engineering at
            WGU, I also dedicate my days to serving as a Front End
            Developer/Graphic Designer at my workplace. There, I shepherd
            landing pages from inception to realization, demonstrating my
            holistic approach to web development and design. Join me on this
            journey to explore the fusion of technology and aesthetics, where
            every click reveals a world of possibility.
          </p>
        </div>
        <div className="xs:w-[100%] lg:w-[50%] p-5 flex justify-center align-start">
          {/* <img src={Me} alt="Me" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
