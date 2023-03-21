import React from "react";

import { CanvasReact } from "./canvas";

const Hero = () => {
  return (
    <section className="md:flex justify-around items-center pb-[60px] lg:pb-[94px]">
      <div>
        <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Hi, I'm <span className="text-[#915EFF]">Andrii</span>
        </h1>
        <p className="mt-2 text-white-100 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          I develop web and mobile applications
        </p>
      </div>
      <div className="h-[300px] md:w-[40%]">
        <CanvasReact />
      </div>
    </section>
  );
};

export default Hero;
