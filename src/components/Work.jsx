import React from "react";
import Marquee from "react-fast-marquee";

import { projects } from "../constants";
import { sectionHeadText } from "../utils/styles";

const Work = () => {
  return (
    <section id="work" className="pb-[60px] md:pb-[94px]">
      <h2 className={`${sectionHeadText} mb-6`}>Projects</h2>
      <Marquee gradient={false} pauseOnHover pauseOnClick>
        {projects.map(
          ({ name, description, tags, image, source_code_link }) => (
            <div
              key={source_code_link}
              className="w-[280px] md:w-[310px] flex flex-col self-stretch mx-8 bg-tertiary p-5 rounded-2xl
               scale-100 hover:scale-90 transition-transform duration-1000 box"
            >
              <a
                href={source_code_link}
                target="_blank"
                className="w-full h-full flex flex-col self-stretch"
              >
                <img
                  src={image}
                  alt="project_image"
                  width={"100%"}
                  height={"100%"}
                  className="aspect-video object-cover rounded-2xl"
                />
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                {description && (
                  <p className="mt-2 text-secondary text-[14px]">
                    {description}
                  </p>
                )}
                <ul className="flex items-center flex-wrap gap-2">
                  {tags.map(({ name, color }, index) => (
                    <li key={index}>
                      <p className={`text-[14px] ${color}`}>#{name}</p>
                    </li>
                  ))}
                </ul>
              </a>
            </div>
          )
        )}
      </Marquee>
    </section>
  );
};

export default Work;
