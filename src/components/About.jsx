import React from "react";

import { technologies } from "../constants";
import { sectionHeadText } from "../utils/styles";
import { CanvasBall } from "./canvas";

const About = () => {
  return (
    <section id="about" className="pb-[60px] lg:pb-[94px]">
      <h2 className={sectionHeadText}>About me</h2>
      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a Front End developer with experience in TypeScript and JavaScript,
        and experience in frameworks such as React and React Native. I am very
        motivated and disciplined, fast learning and ready to solve real
        problems. Let's work together to make your ideas come true!
      </p>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <CanvasBall icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
