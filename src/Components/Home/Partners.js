import React from "react";
import Sponser from "./Sponser";

function Partners() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center p-10 md:pt-10 md:p-20 mt-8">
      <div className="w-full md:w-6/12 relative">
        <div className="absolute z-0">
          <img
            src="./assets/Home/base.svg"
            alt="base"
            className="w-full md:w-9/12"
          />
        </div>
        <div className="relative z-1 left-10 lg:left-32">
          <img
            src="./assets/Home/bigplane.svg"
            alt="paper_plan"
            className="w-9/12 lg:w-6/12"
          />
        </div>
      </div>
      <div className="w-full lg:w-6/12">
        <Sponser />
      </div>
    </div>
  );
}

export default Partners;
