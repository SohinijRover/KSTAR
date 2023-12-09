import React from "react";
import CardInfo from "../ProjectCard/CardInfo";
import BgBench from "./BgBench";
import BgBenchTwo from "./BgBenchTwo";
import Partners from "./Partners";
import Faqinit from "./ParticularCom/faqinit";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-vioblend via-blue to-vioblend2 pb-10 z-0">
      <div className="absolute -bottom-20 lg:-bottom-52">
        <img src="./assets/Home/cloud.svg" alt="cloud_main" />
      </div>
      <div className="container mx-auto">
        <div className="w-full flex justify-center pt-20 lg:pt-52 lg:-mb-20">
          <img
            src="./assets/Home/challenge.png"
            alt="72_hr_challenge"
            className="w-8/12 lg:w-7/12 h-full pt-8 lg:pt-8"
            id="challenge"
          />
        </div>
        <div className="relative -bottom-96">
          <BgBench />
        </div>
        <CardInfo />
        <div className="relative -top-5">
          <BgBenchTwo />
        </div>
      </div>
      <div className="lg:mt-24">
        <img src="./assets/Home/dual_cloude.svg" alt="dual_cloude" />
      </div>
      <div className="container mx-auto">
        <div className="px-8 md:px-20 pt-10">
          <p className="text-white text-3xl sm:text-5xl font-extrabold pb-6">
            FAQ
          </p>
          <Faqinit />
        </div>
        <Partners />
      </div>
    </div>
  );
}

export default Hero;
